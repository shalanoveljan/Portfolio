import { getData } from "./requests/requestSender.js";
import * as ENDPOINTS from "./urlHelper.js";

import { createAbout } from "./creators/aboutCreator.js";
import { createHome } from "./creators/homeCreator.js";
import { createServices } from "./creators/servicesCreator.js";
import { createStatistics } from "./creators/statisticsCreator.js";
import { createTestimonials } from "./creators/testimonialCreator.js";
import { createOurBlog } from "./creators/ourBlogCreator.js";

import { initAllEvents } from "./eventHandlers/baseEventHandler.js";

async function loadPage() {
  await renderAboutData();
  await renderHomeData();
  await renderServicesData();
  await renderStatisticsData();
  await renderTestimonialsData();
  await renderOurBlogData();
  initAllEvents();
}

async function renderAboutData() {
  const dataAboutMe = await getData(ENDPOINTS.ABOUT_ENDPOINT);
  createAbout(dataAboutMe.description);
}

async function renderHomeData() {
  const dataHome = await getData(ENDPOINTS.HOME_ENDPOINT);
  createHome(dataHome.positions, dataHome.description);
}

async function renderServicesData() {
  const dataServices = await getData(ENDPOINTS.SERVICE_ENDPOINT);
  createServices(dataServices);
}

async function renderStatisticsData() {
  const dataStatistics = await getData(ENDPOINTS.STATISTICS_ENDPOINT);
  createStatistics(dataStatistics);
}

async function renderTestimonialsData() {
  const dataTestimonials = await getData(ENDPOINTS.TESTIMONIALS_ENDPOINT);
  createTestimonials(dataTestimonials);
}

async function renderOurBlogData() {
  const dataOurBlog = await getData(ENDPOINTS.OURBLOG_ENDPOINT);
  createOurBlog(dataOurBlog);
}

document.addEventListener("DOMContentLoaded", loadPage);
