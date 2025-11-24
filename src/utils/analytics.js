import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
  ReactGA.initialize(measurementId);
};

// Track page views
export const logPageView = () => {
  ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname + window.location.search 
  });
};

// Track custom events
export const logEvent = (category, action, label = '', value = 0) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
    value: value,
  });
};

// Predefined events for common actions
export const trackCTAClick = (buttonName, location) => {
  logEvent('CTA', 'click', `${buttonName} - ${location}`);
};

export const trackSignUp = (plan) => {
  logEvent('Conversion', 'sign_up', plan);
  ReactGA.event({
    category: 'Conversion',
    action: 'sign_up',
    label: plan,
  });
};

export const trackTrialStart = (plan) => {
  logEvent('Conversion', 'trial_start', plan);
  ReactGA.event({
    category: 'Conversion',
    action: 'trial_start',
    label: plan,
  });
};

export const trackDownload = (fileName) => {
  logEvent('Lead Magnet', 'download', fileName);
};

export const trackBlogRead = (articleTitle, readTime) => {
  logEvent('Blog', 'read', articleTitle, readTime);
};

export const trackVideoPlay = (videoTitle) => {
  logEvent('Video', 'play', videoTitle);
};

export const trackOutboundClick = (url) => {
  logEvent('Outbound', 'click', url);
};