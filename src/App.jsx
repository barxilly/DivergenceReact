import React, { useEffect, useRef } from 'react';
import '@material/web/tabs/tabs';
import '@material/web/tabs/primary-tab';
import '@material/web/icon/icon';
import '@material/web/labs/card/elevated-card';
import '@material/web/labs/card/outlined-card';

// app.css
import './index.css';
import { Button } from '@fluentui/react-components';

function App() {
    const tabsRef = useRef(null);

    useEffect(() => {
        const tabsElement = tabsRef.current;
        const handleTabChange = (event) => {
            console.log(event.target.activeTabIndex);
            if (event.target.activeTabIndex === 0) {
                document.getElementById('home-tab').style.display = 'block';
                document.getElementById('members-tab').style.display = 'none';
                document.getElementById('join-tab').style.display = 'none';
                document.getElementById('downloads-tab').style.display = 'none';
            }
            if (event.target.activeTabIndex === 1) {
                document.getElementById('home-tab').style.display = 'none';
                document.getElementById('members-tab').style.display = 'block';
                document.getElementById('join-tab').style.display = 'none';
                document.getElementById('downloads-tab').style.display = 'none';
            }
            if (event.target.activeTabIndex === 2) {
                document.getElementById('home-tab').style.display = 'none';
                document.getElementById('members-tab').style.display = 'none';
                document.getElementById('join-tab').style.display = 'block';
                document.getElementById('downloads-tab').style.display = 'none';
            }
            if (event.target.activeTabIndex === 3) {
                document.getElementById('home-tab').style.display = 'none';
                document.getElementById('members-tab').style.display = 'none';
                document.getElementById('join-tab').style.display = 'none';
                document.getElementById('downloads-tab').style.display = 'block';
            }
        };

        tabsElement.addEventListener('change', handleTabChange);

        return () => {
            tabsElement.removeEventListener('change', handleTabChange);
        };
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="root">
            <div className="logo">
                <img src="Divergence.png" alt="Divergence Logo" style={{ height: '4em' }} />
            </div>
            <md-tabs id="tabs" ref={tabsRef}>
                <md-primary-tab id="home" aria-controls="home-tab">
                    <md-icon slot="icon">house</md-icon>
                    Home
                </md-primary-tab>
                <md-primary-tab id="members" aria-controls="members-tab">
                    <md-icon slot="icon">person</md-icon>
                    Members
                </md-primary-tab>
                <md-primary-tab id="join" aria-controls="join-tab">
                    <md-icon slot="icon">group_add</md-icon>
                    Join
                </md-primary-tab>
                <md-primary-tab id="downloads" aria-controls="downloads-tab">
                    <md-icon slot="icon">download</md-icon>
                    Downloads
                </md-primary-tab>
            </md-tabs>
            <div id="home-tab" role="tabpanel" aria-labelledby="home">
                <md-elevated-card style={{ margin: '1em', padding: '1em' }}>
                    <md-card-content>
                        <h2>Welcome to Divergence</h2>
                        <p>A closed SMP for only the strangest of people.</p>
                    </md-card-content>
                </md-elevated-card>
                <md-elevated-card style={{ padding: '0', height: "30vh" }}>
                    <md-card-content>
                        <img src="spawn.png" alt="Spawn" style={{ width: '120%', position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)' }} />
                    </md-card-content>
                </md-elevated-card>
                <md-elevated-card style={{ whiteSpace: 'nowrap', overflow: 'hidden', padding: '1em' }}>
                    <md-card-content id="memberfolk" style={{ display: 'ruby',  overflow: 'scroll', whiteSpace: 'nowrap', justifyContent: 'center' }}>
                        <md-outlined-card style={{  margin: '0.5em' }}>
                            <md-card-content>
                                <a href="https://youtube.com/@kat.beanie">
                                    <img src="kat.jpg" alt="Kat" style={{ width: '100%', borderRadius: '5px' }} />
                                    <h3>Kat</h3>
                                </a>
                            </md-card-content>
                        </md-outlined-card>

                        <md-outlined-card style={{  margin: '0.5em' }}>
                            <md-card-content>
                                <a href="https://twitch.tv/diggintruths">
                                    <img src="diggin.jpg" alt="Diggin" style={{ width: '100%', borderRadius: '5px' }} />
                                    <h3>Diggin</h3>
                                </a>
                            </md-card-content>
                        </md-outlined-card>

                        <md-outlined-card style={{  margin: '0.5em' }}>
                            <md-card-content>
                                <a href="https://youtube.com/@amanchoo123">
                                    <img src="amanchoo.jpg" alt="Amanchoo" style={{ width: '100%', borderRadius: '5px' }} />
                                    <h3>Amanchoo</h3>
                                </a>
                            </md-card-content>
                        </md-outlined-card>

                        <md-outlined-card style={{  margin: '0.5em' }}>
                            <md-card-content>
                                <a href="https://twitch.tv/marriednminecraft">
                                    <img src="mim.jpg" alt="Married In Minecraft" style={{ width: '100%', borderRadius: '5px' }} />
                                    <h3>MiM</h3>
                                </a>
                            </md-card-content>
                        </md-outlined-card>

                        <md-outlined-card style={{  margin: '0.5em' }}>
                            <md-card-content>
                                <a href="https://twitch.tv/rockymender">
                                    <img src="rocky.jpg" alt="RockyMender" style={{ width: '100%', borderRadius: '5px' }} />
                                    <h3>RockyMender</h3>
                                </a>
                            </md-card-content>
                        </md-outlined-card>

                        <md-outlined-card style={{  margin: '0.5em' }}>
                            <md-card-content>
                                <a href="https://twitch.tv/holymist6249">
                                    <img src="holymist.jpg" alt="HolyMist" style={{ width: '100%', borderRadius: '5px' }} />
                                    <h3>HolyMist</h3>
                                </a>
                            </md-card-content>
                        </md-outlined-card>

                        <md-outlined-card style={{  margin: '0.5em' }}>
                            <md-card-content>
                                <a href="https://twitter.com/therealsillyman">
                                    <img src="silly.jpg" alt="Silly" style={{ width: '100%', borderRadius: '5px' }} />
                                    <h3>Silly</h3>
                                </a>
                            </md-card-content>
                        </md-outlined-card>
                    </md-card-content>
                </md-elevated-card>
                <md-elevated-card>
                    <md-card-content style={{ alignItems: 'center', color: '#fff', textAlign: 'center', backgroundImage: 'url("majs.png")', backgroundSize: 'fill', borderRadius: '10px', backgroundPosition: 'center', padding: '1em' }}>
                        <img src="s1logo.png" alt="Majestic" style={{ width: '50vw' }} /><br></br>
                        <Button appearance="primary" onClick={() => window.open('https://drive.usercontent.google.com/download?id=1LIxNJVkE6x7FCBAJHTKxb7Bq4IjC3fKi&export=download&authuser=0')}>
                            <md-icon slot="icon" style={{ marginRight:'0.25em' }}>download</md-icon>
                            Download
                            </Button>
                    </md-card-content>
                </md-elevated-card>
            </div>
            <div id="members-tab" role="tabpanel" aria-labelledby="members" style={{ display: 'none' }}>
                <div style={{ textAlign:'center', }}>
                    <h1>Under Construction</h1>
                    <p>Silly hasn't finished this part yet, that lazy bum.</p>
                </div>
            </div>
            <div id="join-tab" role="tabpanel" aria-labelledby="join" style={{ display: 'none' }}>
                <div data-tf-live="01HVKMRWGKHXWHF32Y07XGTH3A"></div>
            </div>
            <div id="downloads-tab" role="tabpanel" aria-labelledby="downloads" style={{ display: 'none' }}>
                <md-elevated-card>
                    <md-card-content style={{ alignItems: 'center', color: '#fff', textAlign: 'center', backgroundImage: 'url("majs.png")', backgroundSize: 'fill', borderRadius: '10px', backgroundPosition: 'center', padding: '1em' }}>
                        <img src="s1logo.png" alt="Majestic" style={{ width: '50vw' }} /><br></br>
                        <Button appearance="primary" onClick={() => window.open('https://drive.usercontent.google.com/download?id=1LIxNJVkE6x7FCBAJHTKxb7Bq4IjC3fKi&export=download&authuser=0')}>
                            <md-icon slot="icon" style={{ marginRight:'0.25em' }}>download</md-icon>
                            Download
                        </Button>
                    </md-card-content>
                </md-elevated-card>
                <md-elevated-card>
                    <md-card-content style={{ alignItems: 'center', color: '#fff', textAlign: 'center', backgroundSize: 'fill', borderRadius: '10px', backgroundPosition: 'center', padding: '1em' }}>
                        <img src="app.png" alt="App Logo" style={{ width: '50vw' }} /><br></br>
                        <Button appearance="primary" onClick={() => window.open('/downloads/DivergenceApp0.1.12.msix')}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1.25em" viewBox="0,0,256,256" style={{marginRight:'0.25em'}}>
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><g transform="scale(5.12,5.12)"><path d="M4,4h20v20h-20zM26,4h20v20h-20zM4,26h20v20h-20zM26,26h20v20h-20z"></path></g></g>
</svg>
                            Download
                        </Button>
                    </md-card-content>
                    </md-elevated-card>
            </div>
        </div>
    );
}

export default App;