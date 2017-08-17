import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SearchPage from './components/SearchPage';
import SearchPageResults from './components/SearchPageResults';
import PropertyDetailsPage from './components/PropertyDetailsPage'; 
 

const RouterComponent = () => {
     return (
       <Router sceneStyle={{ paddingTop: 65 }}>
         
             <Scene key="root">

                 <Scene key="main">

                   
                   <Scene key="searchPage" component={SearchPage} title="Property Finder" />

                   <Scene 
                          key="searchPageResults" component={SearchPageResults}
                          title="Property Listings"
                   /> 

                    <Scene 
                          key="propertyDetailsPage" component={PropertyDetailsPage}
                          title="Property Listings"
                    /> 
                   
                 </Scene>
                 

             </Scene>
         
       </Router>
     );
};

export default RouterComponent;
