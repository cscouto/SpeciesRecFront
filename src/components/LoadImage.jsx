var React = require('react');
var HTTP = require('../services/httpservice');

var LoadImage = React.createClass({
    getInitialState: function() {
        return {image:'', result: ''};
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
    classify: function(){
        HTTP.post('/getSpecie', this.state.image)
      .then(function(data){
            this.setState({result: data});
            console.log(data)
      }.bind(this));
    },
    render: function(){
        var divStyle = {
            visibility: 'hidden'
        }
        return (
            <div>
                <div className="col-xs-12 col-sm-4 col-lg-4">
                    <button className="btn btn-primary" onClick={this.changePicture}> Carregar Imagem</button>
                    <button className="btn btn-success" onClick={this.classify}>Classificar</button>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-4">
                    <img id="image" src="noimage.jpg" className="img-rounded" width="704" height="536" />
                    <input accept="image/*" type="file" id="upload" name="upload" onChange={this.readURL} style={divStyle} />
                </div>
            </div>
        );
    }
});

module.exports = LoadImage;