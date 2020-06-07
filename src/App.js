import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

// CUSTOM COMPONENT
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';

// CUSTOM CONTEXT & HOOK
import { LanguageContext } from './shared/context/language-context';
import { useLanguage } from './shared/hooks/language-hook';

// CUSTOM PAGE COMPONENT
const SingleBlogPage = React.lazy(() =>
  import('./blogPage/pages/SingleBlogPage')
);
const BlogPage = React.lazy(() => import('./blogPage/pages/BlogPage'));
const ContactPage = React.lazy(() => import('./contactPage/pages/ContactPage'));
const ProfilePage = React.lazy(() => import('./profilePage/pages/ProfilePage'));
const SingleProjectPage = React.lazy(() =>
  import('./singleProjectPage/pages/SingleProjectPage')
);
const HomePage = React.lazy(() => import('./homePage/pages/HomePage'));

const App = (props) => {
  const { language, changeLanguageHandler } = useLanguage();

  useEffect(() => {}, []);

  let routes = (
    <Switch>
      <Route path="/blog/:blogId" component={SingleBlogPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/projects/:projectId" component={SingleProjectPage} />
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        change: changeLanguageHandler,
      }}
    >
      <MainNavigation {...props}>
        <Suspense fallback={<LoadingSpinner asOverlay />}>{routes}</Suspense>
      </MainNavigation>
    </LanguageContext.Provider>
  );
};

export default withRouter(App);
