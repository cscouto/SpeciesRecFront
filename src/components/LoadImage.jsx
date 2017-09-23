var React = require('react');
var HTTP = require('../services/httpservice');

var LoadImage = React.createClass({
    getInitialState: function() {
        return {image:'', result: '', loading: 'none', modal: 'none'};
    },
    changePicture: function(){
        $('#upload').click();
    },
    readURL: function (e){
        if (e.target.files && e.target.files[0]){
            var reader = new FileReader();
            reader.onload = function (e){
                $('#image')
                .attr('src',e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
            this.getBase64(e.target.files[0]);
        }
    },      
    getBase64: function(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            var textoReplace = "data:image/jpeg;base64,";
            var resultado_str = reader.result.substring(reader.result.indexOf(textoReplace) + textoReplace.length);
            this.setState({image: resultado_str});
        }.bind(this);
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    },
    closeModal: function() {
       this.setState({modal: 'none'});
    },
    classify: function(){
        this.setState({loading: 'block'});
        HTTP.post('/getSpecie', this.state.image)
      .then(function(data){
            var array = data.list
            var res = Math.max.apply(Math,array.map(function(o){return o.percent;}))
            var obj = array.find(function(o){ return o.percent == res; })
            obj.percent = obj.percent * 100
            this.setState({result: obj});
            this.setState({loading: 'none', modal: 'block'});
      }.bind(this));
    },
    render: function(){
        var divStyle = {
            visibility: 'hidden'
        }
        var loadStyle = {
            display: this.state.loading
        }
        var modalStyle = {
            display: this.state.modal
        }
        return (
            <div className="row">
                        <div className="col-xs-12 col-sm-3">
                            <div className="row">
                                <button className="btn btn-primary" onClick={this.changePicture}>Carregar Imagem</button>
                            </div>
                            <div className="row">
                                <button className="btn btn-success" onClick={this.classify}>Classificar</button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-9">
                            <div id="loader" style={loadStyle}></div>
                            <div className="modal" style={modalStyle}>
                            <div className="modal-content">
                                <span className="close" onClick={this.closeModal}>&times;</span>
                                <div className="info">
                                    <h4>Especie: {this.state.result.name}</h4>
                                    <h4>Probabilidade: {this.state.result.percent}%</h4>
                                </div>
                            </div>
                            </div>
                            <div className="limit">
                                <img id="image" src="noimage.jpg" className="img-rounded" />
                                <input accept="image/*" type="file" id="upload" name="upload" onChange={this.readURL} style={divStyle} />
                            </div>
                        </div>
            </div>
        );
    }
});

module.exports = LoadImage;