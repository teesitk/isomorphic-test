import React from 'react';
 
// โหลดความสามารถของ react-router มาใช้งาน
import { Link } from 'react-router-dom';
import Progress from 'react-progress';


class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        percent: 1
      };
    }

    // componentWillMount() {
    //     this.setPercent(0)
    // }
    setPercent (percent) {
        this.setState({
            percent:percent
        });
        this.setState({
            percent:0
        });
    }
    progressDone (e) {
        e.preventDefault()
        this.setState({
            percent:100
        });
    }
    componentDidMount() {
      this.setPercent(100)
    }

    // ใส่ link ไปยังหน้า Home และ About
    render() {
        return (
            <div>
                <Progress percent={this.state.percent} color='red'/>
                <header className="navbar navbar-light navbar-toggleable-md bd-navbar">
                  <nav className="container">
                    

                    <div className="d-flex justify-content-between hidden-lg-up">
                      <a className="navbar-brand" href="/">
                        Bootstrap
                      </a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bd-main-nav" aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    </div>

                    <div className="collapse navbar-collapse" id="bd-main-nav">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><Link to='/' className="nav-item nav-link "><i className="fa fa-drivers-license-o" aria-hidden="true"></i>Home</Link></li>
                            <li className="nav-item"><Link to='/about' className="nav-item nav-link ">About</Link></li>
                        </ul>
                    </div>
                  </nav>
                </header>

                <div className={'container'}>
                    <div className="card">
                      <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22769%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20769%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ab65a6332%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A38pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ab65a6332%22%3E%3Crect%20width%3D%22769%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22266.21875%22%20y%3D%22106.80000000000001%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"/>
                      <div className="card-block">
                        <p className="card-text">sample content.</p><i className="fa fa-drivers-license-o" aria-hidden="true"></i>
                      </div>
                    </div>
                    {this.props.children}
                </div>

            </div>
        );
   }
}
 
export default App;