import React, { useRef, useEffect } from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import TagManager from "react-gtm-module";
import "@brainhubeu/react-carousel/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Privacy from "./views/Privacy";

// Google Analitics
const tagManagerArgs = {
  gtmId: "GTM-KLC4WCB",
};

TagManager.initialize(tagManagerArgs);

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Provider store={store}>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <Route path="/privacy" component={Privacy} />
          </Switch>
        )}
      />
    </Provider>
  );
};

export default App;
