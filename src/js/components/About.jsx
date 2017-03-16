import React from 'react';
import ReactDom from 'react-dom';
 
class About extends React.Component {
	
	componentDidMount() {
		var elem = ReactDom.findDOMNode(this);
		elem.style.opacity = 0;
		window.requestAnimationFrame(function() {
			elem.style.transition = "opacity 500ms";
			elem.style.opacity = 1;
		});
	}
	
    render() {
        return (
            <div className="card">
			  <img className="card-img-top" src="http://media.thaitv3.com/store/v4/drama/2017/03/0971920567.jpg" alt="Card image cap"/>
			  <div className="card-block">
			    <p className="card-text"> The term isomorphism literally means sameness (iso) of form (morphism). In Gestalt psychology, Isomorphism is the idea that perception and the underlying physiological representation are similar because of related Gestalt qualities. Isomorphism refers to a correspondence between a stimulus array and the brain state created by that stimulus, and is based on the idea that the objective brain processes underlying and correlated with particular phenomenological experiences functionally have the same form and structure as those subjective experiences</p>
			  </div>
			</div>
        );
    }
}
 
export default About;