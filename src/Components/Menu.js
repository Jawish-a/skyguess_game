import React from 'react';
import bg_main from "../img/bg_main.png"

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-md-4 d-none d-md-block   bg-main">
                        <img src={bg_main} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8 border border-danger text-right">
                        <div className="container">
                            <div className="container text-right">
                                <div className="container text-right py-5">
                                    <p className="text-muted menu-text" >Game A</p>
                                    <p className="text-muted menu-text" >Game B</p>
                                    <p className="text-muted menu-text" >Game C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
