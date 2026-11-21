import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Loadable from "@/components/loadable";
import AdminLayout from "@/pages/admin/layout";
import AuthLayout from "@/pages/auth/layout";

// Dashboards
const DashboardPage = Loadable(lazy(() => import("@/pages/admin/dashboard/page")));
const AnalyticsPage = Loadable(lazy(() => import("@/pages/admin/dashboard/analytics/page")));
const CrmPage = Loadable(lazy(() => import("@/pages/admin/dashboard/crm/page")));
const EcommercePage = Loadable(lazy(() => import("@/pages/admin/dashboard/ecommerce/page")));
const LmsPage = Loadable(lazy(() => import("@/pages/admin/dashboard/lms/page")));
const ManagementPage = Loadable(lazy(() => import("@/pages/admin/dashboard/management/page")));
const SaasPage = Loadable(lazy(() => import("@/pages/admin/dashboard/saas/page")));
const SupportDeskPage = Loadable(lazy(() => import("@/pages/admin/dashboard/support-desk/page")));

// Applications
const CalendarPage = Loadable(lazy(() => import("@/pages/admin/app/calendar/page")));
const ChatPage = Loadable(lazy(() => import("@/pages/admin/app/chat/page")));
const EmailInboxPage = Loadable(lazy(() => import("@/pages/admin/app/email/inbox/page")));
const EmailDetailPage = Loadable(lazy(() => import("@/pages/admin/app/email/detail/page")));
const EmailComposePage = Loadable(lazy(() => import("@/pages/admin/app/email/compose/page")));
const EventCreatePage = Loadable(lazy(() => import("@/pages/admin/app/events/create/page")));
const EventDetailPage = Loadable(lazy(() => import("@/pages/admin/app/events/detail/page")));
const EventListPage = Loadable(lazy(() => import("@/pages/admin/app/events/list/page")));

// Ecommerce App
const ProductListPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/products/page")));
const ProductGridPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/products/grid/page")));
const ProductDetailsPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/products/details/page")));
const AddProductPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/products/new/page")));
const OrderListPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/orders/page")));
const OrderDetailsPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/orders/details/page")));
const CustomersPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/customers/page")));
const CustomerDetailsPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/customers/details/page")));
const CartPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/cart/page")));
const CheckoutPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/checkout/page")));
const BillingPage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/billing/page")));
const InvoicePage = Loadable(lazy(() => import("@/pages/admin/app/ecommerce/invoice/page")));

// E-learning App
const CoursePage = Loadable(lazy(() => import("@/pages/admin/app/e-learning/course/page")));
const StudentOverviewPage = Loadable(lazy(() => import("@/pages/admin/app/e-learning/student-overview/page")));
const TrainerProfilePage = Loadable(lazy(() => import("@/pages/admin/app/e-learning/trainer-profile/page")));

// Kanban
const KanbanPage = Loadable(lazy(() => import("@/pages/admin/app/kanban/page")));

// Social App
const SocialFeedPage = Loadable(lazy(() => import("@/pages/admin/app/social/feed/page")));
const ActivityLogPage = Loadable(lazy(() => import("@/pages/admin/app/social/activity-log/page")));
const NotificationsPage = Loadable(lazy(() => import("@/pages/admin/app/social/notifications/page")));
const FollowersPage = Loadable(lazy(() => import("@/pages/admin/app/social/followers/page")));

// Support Desk App
const SupportDeskCardsPage = Loadable(lazy(() => import("@/pages/admin/app/support-desk/cards/page")));
const SupportDeskContactsPage = Loadable(lazy(() => import("@/pages/admin/app/support-desk/contacts/page")));
const SupportDeskContactDetailPage = Loadable(lazy(() => import("@/pages/admin/app/support-desk/contacts/detail/page")));
const SupportDeskQuickLinksPage = Loadable(lazy(() => import("@/pages/admin/app/support-desk/quick-links/page")));
const SupportDeskReportsPage = Loadable(lazy(() => import("@/pages/admin/app/support-desk/reports/page")));
const SupportDeskTablePage = Loadable(lazy(() => import("@/pages/admin/app/support-desk/table/page")));
const SupportDeskTicketsPage = Loadable(lazy(() => import("@/pages/admin/app/support-desk/tickets/page")));

// Components
const AccordionPage = Loadable(lazy(() => import("@/pages/admin/components/accordion/page")));
const AlertsPage = Loadable(lazy(() => import("@/pages/admin/components/alerts/page")));
const AnimatedIconsPage = Loadable(lazy(() => import("@/pages/admin/components/animated-icons/page")));
const BadgesPage = Loadable(lazy(() => import("@/pages/admin/components/badges/page")));
const BreadcrumbsPage = Loadable(lazy(() => import("@/pages/admin/components/breadcrumbs/page")));
const ButtonsPage = Loadable(lazy(() => import("@/pages/admin/components/buttons/page")));
const CardsPage = Loadable(lazy(() => import("@/pages/admin/components/cards/page")));
const CarouselPage = Loadable(lazy(() => import("@/pages/admin/components/carousel/page")));
const CollapsePage = Loadable(lazy(() => import("@/pages/admin/components/collapse/page")));
const CookieNoticePage = Loadable(lazy(() => import("@/pages/admin/components/cookie-notice/page")));
const CountUpPage = Loadable(lazy(() => import("@/pages/admin/components/countup/page")));
const DropdownsPage = Loadable(lazy(() => import("@/pages/admin/components/dropdowns/page")));
const ListGroupPage = Loadable(lazy(() => import("@/pages/admin/components/list-group/page")));
const ModalsPage = Loadable(lazy(() => import("@/pages/admin/components/modals/page")));
const NavsTabsNavsPage = Loadable(lazy(() => import("@/pages/admin/components/navs-tabs/navs/page")));
const NavsTabsNavbarPage = Loadable(lazy(() => import("@/pages/admin/components/navs-tabs/navbar/page")));
const NavsTabsTabsPage = Loadable(lazy(() => import("@/pages/admin/components/navs-tabs/tabs/page")));
const OffcanvasPage = Loadable(lazy(() => import("@/pages/admin/components/offcanvas/page")));
const PaginationPage = Loadable(lazy(() => import("@/pages/admin/components/pagination/page")));
const PicturesAvatarsPage = Loadable(lazy(() => import("@/pages/admin/components/pictures/avatars/page")));
const PicturesImagesPage = Loadable(lazy(() => import("@/pages/admin/components/pictures/images/page")));
const PicturesFiguresPage = Loadable(lazy(() => import("@/pages/admin/components/pictures/figures/page")));
const PicturesHoverboxPage = Loadable(lazy(() => import("@/pages/admin/components/pictures/hoverbox/page")));
const PicturesLightboxPage = Loadable(lazy(() => import("@/pages/admin/components/pictures/lightbox/page")));
const PlaceholderPage = Loadable(lazy(() => import("@/pages/admin/components/placeholder/page")));
const PopoversPage = Loadable(lazy(() => import("@/pages/admin/components/popovers/page")));
const ProgressBarPage = Loadable(lazy(() => import("@/pages/admin/components/progress-bar/page")));
const ScrollspyPage = Loadable(lazy(() => import("@/pages/admin/components/scrollspy/page")));
const SearchPage = Loadable(lazy(() => import("@/pages/admin/components/search/page")));
const SortablePage = Loadable(lazy(() => import("@/pages/admin/components/sortable/page")));
const SpinnersPage = Loadable(lazy(() => import("@/pages/admin/components/spinners/page")));
const TimelinePage = Loadable(lazy(() => import("@/pages/admin/components/timeline/page")));
const ToastsPage = Loadable(lazy(() => import("@/pages/admin/components/toasts/page")));
const TooltipsPage = Loadable(lazy(() => import("@/pages/admin/components/tooltips/page")));
const TreeviewPage = Loadable(lazy(() => import("@/pages/admin/components/treeview/page")));
const TypedTextPage = Loadable(lazy(() => import("@/pages/admin/components/typed-text/page")));
const VideosEmbedPage = Loadable(lazy(() => import("@/pages/admin/components/videos/embed/page")));
const VideosPlyrPage = Loadable(lazy(() => import("@/pages/admin/components/videos/plyr/page")));

// Layouts Demo
const NavbarVerticalPage = Loadable(lazy(() => import("@/pages/admin/layouts/navbar-vertical/page")));
const TopNavPage = Loadable(lazy(() => import("@/pages/admin/layouts/top-nav/page")));
const DoubleTopPage = Loadable(lazy(() => import("@/pages/admin/layouts/double-top/page")));
const ComboNavPage = Loadable(lazy(() => import("@/pages/admin/layouts/combo-nav/page")));

// Pages
const StarterPage = Loadable(lazy(() => import("@/pages/admin/pages/starter/page")));
const LandingPage = Loadable(lazy(() => import("@/pages/admin/pages/landing/page")));
const UserProfilePage = Loadable(lazy(() => import("@/pages/admin/pages/user/profile/page")));
const UserSettingsPage = Loadable(lazy(() => import("@/pages/admin/pages/user/settings/page")));
const PricingPage = Loadable(lazy(() => import("@/pages/admin/pages/pricing/page")));
const PricingAltPage = Loadable(lazy(() => import("@/pages/admin/pages/pricing/alt/page")));
const FaqPage = Loadable(lazy(() => import("@/pages/admin/pages/faq/page")));
const FaqAltPage = Loadable(lazy(() => import("@/pages/admin/pages/faq/alt/page")));
const FaqAccordionPage = Loadable(lazy(() => import("@/pages/admin/pages/faq/accordion/page")));
const MiscAssociationsPage = Loadable(lazy(() => import("@/pages/admin/pages/misc/associations/page")));
const MiscInvitePage = Loadable(lazy(() => import("@/pages/admin/pages/misc/invite/page")));
const MiscPrivacyPolicyPage = Loadable(lazy(() => import("@/pages/admin/pages/misc/privacy-policy/page")));

// Errors
const Error404Page = Loadable(lazy(() => import("@/pages/admin/errors/404/page")));
const Error500Page = Loadable(lazy(() => import("@/pages/admin/errors/500/page")));

// Modules - Forms
const FormsBasicPage = Loadable(lazy(() => import("@/pages/admin/modules/forms/basic/page")));
const FormsAdvancePage = Loadable(lazy(() => import("@/pages/admin/modules/forms/advance/page")));
const FormsFloatingLabelsPage = Loadable(lazy(() => import("@/pages/admin/modules/forms/floating-labels/page")));
const FormsWizardPage = Loadable(lazy(() => import("@/pages/admin/modules/forms/wizard/page")));
const FormsValidationPage = Loadable(lazy(() => import("@/pages/admin/modules/forms/validation/page")));

// Modules - Tables
const TablesBasicPage = Loadable(lazy(() => import("@/pages/admin/modules/tables/basic/page")));
const TablesAdvancePage = Loadable(lazy(() => import("@/pages/admin/modules/tables/advance/page")));
const TablesBulkSelectPage = Loadable(lazy(() => import("@/pages/admin/modules/tables/bulk-select/page")));

// Modules - Charts & Maps & Icons
const ChartsRechartsPage = Loadable(lazy(() => import("@/pages/admin/modules/charts/recharts/page")));
const MapsPage = Loadable(lazy(() => import("@/pages/admin/modules/maps/page")));
const IconsBootstrapPage = Loadable(lazy(() => import("@/pages/admin/modules/icons/bootstrap/page")));
const IconsFeatherPage = Loadable(lazy(() => import("@/pages/admin/modules/icons/feather/page")));
const IconsFontAwesomePage = Loadable(lazy(() => import("@/pages/admin/modules/icons/font-awesome/page")));
const IconsMaterialPage = Loadable(lazy(() => import("@/pages/admin/modules/icons/material/page")));

// Utilities
const UtilBackgroundPage = Loadable(lazy(() => import("@/pages/admin/utilities/background/page")));
const UtilBordersPage = Loadable(lazy(() => import("@/pages/admin/utilities/borders/page")));
const UtilColoredLinksPage = Loadable(lazy(() => import("@/pages/admin/utilities/colored-links/page")));
const UtilColorsPage = Loadable(lazy(() => import("@/pages/admin/utilities/colors/page")));
const UtilDisplayPage = Loadable(lazy(() => import("@/pages/admin/utilities/display/page")));
const UtilFlexPage = Loadable(lazy(() => import("@/pages/admin/utilities/flex/page")));
const UtilFloatPage = Loadable(lazy(() => import("@/pages/admin/utilities/float/page")));
const UtilGridPage = Loadable(lazy(() => import("@/pages/admin/utilities/grid/page")));
const UtilSizingPage = Loadable(lazy(() => import("@/pages/admin/utilities/sizing/page")));
const UtilSpacingPage = Loadable(lazy(() => import("@/pages/admin/utilities/spacing/page")));
const UtilStretchedLinkPage = Loadable(lazy(() => import("@/pages/admin/utilities/stretched-link/page")));
const UtilTypographyPage = Loadable(lazy(() => import("@/pages/admin/utilities/typography/page")));
const UtilVerticalAlignPage = Loadable(lazy(() => import("@/pages/admin/utilities/vertical-align/page")));
const UtilVisibilityPage = Loadable(lazy(() => import("@/pages/admin/utilities/visibility/page")));

// Auth Pages - Simple
const SimpleLoginPage = Loadable(lazy(() => import("@/pages/auth/auth/simple/login/page")));
const SimpleRegisterPage = Loadable(lazy(() => import("@/pages/auth/auth/simple/register/page")));
const SimpleForgotPasswordPage = Loadable(lazy(() => import("@/pages/auth/auth/simple/forgot-password/page")));
const SimpleConfirmMailPage = Loadable(lazy(() => import("@/pages/auth/auth/simple/confirm-mail/page")));
const SimpleResetPasswordPage = Loadable(lazy(() => import("@/pages/auth/auth/simple/reset-password/page")));
const SimpleLockScreenPage = Loadable(lazy(() => import("@/pages/auth/auth/simple/lock-screen/page")));

// Auth Pages - Card
const CardLoginPage = Loadable(lazy(() => import("@/pages/auth/auth/card/login/page")));
const CardRegisterPage = Loadable(lazy(() => import("@/pages/auth/auth/card/register/page")));
const CardForgotPasswordPage = Loadable(lazy(() => import("@/pages/auth/auth/card/forgot-password/page")));
const CardConfirmMailPage = Loadable(lazy(() => import("@/pages/auth/auth/card/confirm-mail/page")));
const CardResetPasswordPage = Loadable(lazy(() => import("@/pages/auth/auth/card/reset-password/page")));
const CardLockScreenPage = Loadable(lazy(() => import("@/pages/auth/auth/card/lock-screen/page")));

// Auth Pages - Split
const SplitLoginPage = Loadable(lazy(() => import("@/pages/auth/auth/split/login/page")));
const SplitRegisterPage = Loadable(lazy(() => import("@/pages/auth/auth/split/register/page")));
const SplitForgotPasswordPage = Loadable(lazy(() => import("@/pages/auth/auth/split/forgot-password/page")));
const SplitConfirmMailPage = Loadable(lazy(() => import("@/pages/auth/auth/split/confirm-mail/page")));
const SplitResetPasswordPage = Loadable(lazy(() => import("@/pages/auth/auth/split/reset-password/page")));
const SplitLockScreenPage = Loadable(lazy(() => import("@/pages/auth/auth/split/lock-screen/page")));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <AdminLayout />,
    children: [
      // Dashboards
      { path: "dashboard", element: <DashboardPage /> },
      { path: "dashboard/analytics", element: <AnalyticsPage /> },
      { path: "dashboard/crm", element: <CrmPage /> },
      { path: "dashboard/ecommerce", element: <EcommercePage /> },
      { path: "dashboard/lms", element: <LmsPage /> },
      { path: "dashboard/management", element: <ManagementPage /> },
      { path: "dashboard/saas", element: <SaasPage /> },
      { path: "dashboard/support-desk", element: <SupportDeskPage /> },

      // App routes
      { path: "app/calendar", element: <CalendarPage /> },
      { path: "app/chat", element: <ChatPage /> },
      { path: "app/email", element: <Navigate to="/app/email/inbox" replace /> },
      { path: "app/email/inbox", element: <EmailInboxPage /> },
      { path: "app/email/detail", element: <EmailDetailPage /> },
      { path: "app/email/compose", element: <EmailComposePage /> },
      { path: "app/events", element: <Navigate to="/app/events/list" replace /> },
      { path: "app/events/create", element: <EventCreatePage /> },
      { path: "app/events/detail", element: <EventDetailPage /> },
      { path: "app/events/list", element: <EventListPage /> },

      // Ecommerce
      { path: "app/ecommerce", element: <Navigate to="/app/ecommerce/products" replace /> },
      { path: "app/ecommerce/products", element: <ProductListPage /> },
      { path: "app/ecommerce/products/grid", element: <ProductGridPage /> },
      { path: "app/ecommerce/products/details", element: <ProductDetailsPage /> },
      { path: "app/ecommerce/products/new", element: <AddProductPage /> },
      { path: "app/ecommerce/orders", element: <OrderListPage /> },
      { path: "app/ecommerce/orders/details", element: <OrderDetailsPage /> },
      { path: "app/ecommerce/customers", element: <CustomersPage /> },
      { path: "app/ecommerce/customers/details", element: <CustomerDetailsPage /> },
      { path: "app/ecommerce/cart", element: <CartPage /> },
      { path: "app/ecommerce/checkout", element: <CheckoutPage /> },
      { path: "app/ecommerce/billing", element: <BillingPage /> },
      { path: "app/ecommerce/invoice", element: <InvoicePage /> },

      // E-learning
      { path: "app/e-learning", element: <Navigate to="/app/e-learning/course" replace /> },
      { path: "app/e-learning/course", element: <CoursePage /> },
      { path: "app/e-learning/student-overview", element: <StudentOverviewPage /> },
      { path: "app/e-learning/trainer-profile", element: <TrainerProfilePage /> },

      // Kanban
      { path: "app/kanban", element: <KanbanPage /> },

      // Social
      { path: "app/social", element: <Navigate to="/app/social/feed" replace /> },
      { path: "app/social/feed", element: <SocialFeedPage /> },
      { path: "app/social/activity-log", element: <ActivityLogPage /> },
      { path: "app/social/notifications", element: <NotificationsPage /> },
      { path: "app/social/followers", element: <FollowersPage /> },

      // Support Desk
      { path: "app/support-desk", element: <Navigate to="/app/support-desk/table" replace /> },
      { path: "app/support-desk/cards", element: <SupportDeskCardsPage /> },
      { path: "app/support-desk/contacts", element: <SupportDeskContactsPage /> },
      { path: "app/support-desk/contacts/detail", element: <SupportDeskContactDetailPage /> },
      { path: "app/support-desk/quick-links", element: <SupportDeskQuickLinksPage /> },
      { path: "app/support-desk/reports", element: <SupportDeskReportsPage /> },
      { path: "app/support-desk/table", element: <SupportDeskTablePage /> },
      { path: "app/support-desk/tickets", element: <SupportDeskTicketsPage /> },

      // Components
      { path: "components/accordion", element: <AccordionPage /> },
      { path: "components/alerts", element: <AlertsPage /> },
      { path: "components/animated-icons", element: <AnimatedIconsPage /> },
      { path: "components/badges", element: <BadgesPage /> },
      { path: "components/breadcrumbs", element: <BreadcrumbsPage /> },
      { path: "components/buttons", element: <ButtonsPage /> },
      { path: "components/cards", element: <CardsPage /> },
      { path: "components/carousel", element: <CarouselPage /> },
      { path: "components/collapse", element: <CollapsePage /> },
      { path: "components/cookie-notice", element: <CookieNoticePage /> },
      { path: "components/countup", element: <CountUpPage /> },
      { path: "components/dropdowns", element: <DropdownsPage /> },
      { path: "components/list-group", element: <ListGroupPage /> },
      { path: "components/modals", element: <ModalsPage /> },
      { path: "components/navs-tabs", element: <Navigate to="/components/navs-tabs/navs" replace /> },
      { path: "components/navs-tabs/navs", element: <NavsTabsNavsPage /> },
      { path: "components/navs-tabs/navbar", element: <NavsTabsNavbarPage /> },
      { path: "components/navs-tabs/tabs", element: <NavsTabsTabsPage /> },
      { path: "components/offcanvas", element: <OffcanvasPage /> },
      { path: "components/pagination", element: <PaginationPage /> },
      { path: "components/pictures", element: <Navigate to="/components/pictures/avatars" replace /> },
      { path: "components/pictures/avatars", element: <PicturesAvatarsPage /> },
      { path: "components/pictures/images", element: <PicturesImagesPage /> },
      { path: "components/pictures/figures", element: <PicturesFiguresPage /> },
      { path: "components/pictures/hoverbox", element: <PicturesHoverboxPage /> },
      { path: "components/pictures/lightbox", element: <PicturesLightboxPage /> },
      { path: "components/placeholder", element: <PlaceholderPage /> },
      { path: "components/popovers", element: <PopoversPage /> },
      { path: "components/progress-bar", element: <ProgressBarPage /> },
      { path: "components/scrollspy", element: <ScrollspyPage /> },
      { path: "components/search", element: <SearchPage /> },
      { path: "components/sortable", element: <SortablePage /> },
      { path: "components/spinners", element: <SpinnersPage /> },
      { path: "components/timeline", element: <TimelinePage /> },
      { path: "components/toasts", element: <ToastsPage /> },
      { path: "components/tooltips", element: <TooltipsPage /> },
      { path: "components/treeview", element: <TreeviewPage /> },
      { path: "components/typed-text", element: <TypedTextPage /> },
      { path: "components/videos", element: <Navigate to="/components/videos/embed" replace /> },
      { path: "components/videos/embed", element: <VideosEmbedPage /> },
      { path: "components/videos/plyr", element: <VideosPlyrPage /> },

      // Layouts
      { path: "layouts/navbar-vertical", element: <NavbarVerticalPage /> },
      { path: "layouts/top-nav", element: <TopNavPage /> },
      { path: "layouts/double-top", element: <DoubleTopPage /> },
      { path: "layouts/combo-nav", element: <ComboNavPage /> },

      // Pages
      { path: "pages/starter", element: <StarterPage /> },
      { path: "pages/landing", element: <LandingPage /> },
      { path: "pages/user", element: <Navigate to="/pages/user/profile" replace /> },
      { path: "pages/user/profile", element: <UserProfilePage /> },
      { path: "pages/user/settings", element: <UserSettingsPage /> },
      { path: "pages/pricing", element: <PricingPage /> },
      { path: "pages/pricing/alt", element: <PricingAltPage /> },
      { path: "pages/faq", element: <FaqPage /> },
      { path: "pages/faq/alt", element: <FaqAltPage /> },
      { path: "pages/faq/accordion", element: <FaqAccordionPage /> },
      { path: "pages/misc", element: <Navigate to="/pages/misc/associations" replace /> },
      { path: "pages/misc/associations", element: <MiscAssociationsPage /> },
      { path: "pages/misc/invite", element: <MiscInvitePage /> },
      { path: "pages/misc/privacy-policy", element: <MiscPrivacyPolicyPage /> },

      // Errors
      { path: "errors/404", element: <Error404Page /> },
      { path: "errors/500", element: <Error500Page /> },

      // Modules - Forms
      { path: "modules/forms", element: <Navigate to="/modules/forms/basic" replace /> },
      { path: "modules/forms/basic", element: <FormsBasicPage /> },
      { path: "modules/forms/advance", element: <FormsAdvancePage /> },
      { path: "modules/forms/floating-labels", element: <FormsFloatingLabelsPage /> },
      { path: "modules/forms/wizard", element: <FormsWizardPage /> },
      { path: "modules/forms/validation", element: <FormsValidationPage /> },

      // Modules - Tables
      { path: "modules/tables", element: <Navigate to="/modules/tables/basic" replace /> },
      { path: "modules/tables/basic", element: <TablesBasicPage /> },
      { path: "modules/tables/advance", element: <TablesAdvancePage /> },
      { path: "modules/tables/bulk-select", element: <TablesBulkSelectPage /> },

      // Modules - Charts & Maps & Icons
      { path: "modules/charts/recharts", element: <ChartsRechartsPage /> },
      { path: "modules/maps", element: <MapsPage /> },
      { path: "modules/icons", element: <Navigate to="/modules/icons/font-awesome" replace /> },
      { path: "modules/icons/bootstrap", element: <IconsBootstrapPage /> },
      { path: "modules/icons/feather", element: <IconsFeatherPage /> },
      { path: "modules/icons/font-awesome", element: <IconsFontAwesomePage /> },
      { path: "modules/icons/material", element: <IconsMaterialPage /> },

      // Utilities
      { path: "utilities/background", element: <UtilBackgroundPage /> },
      { path: "utilities/borders", element: <UtilBordersPage /> },
      { path: "utilities/colored-links", element: <UtilColoredLinksPage /> },
      { path: "utilities/colors", element: <UtilColorsPage /> },
      { path: "utilities/display", element: <UtilDisplayPage /> },
      { path: "utilities/flex", element: <UtilFlexPage /> },
      { path: "utilities/float", element: <UtilFloatPage /> },
      { path: "utilities/grid", element: <UtilGridPage /> },
      { path: "utilities/sizing", element: <UtilSizingPage /> },
      { path: "utilities/spacing", element: <UtilSpacingPage /> },
      { path: "utilities/stretched-link", element: <UtilStretchedLinkPage /> },
      { path: "utilities/typography", element: <UtilTypographyPage /> },
      { path: "utilities/vertical-align", element: <UtilVerticalAlignPage /> },
      { path: "utilities/visibility", element: <UtilVisibilityPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "auth", element: <Navigate to="/auth/simple/login" replace /> },
      // Simple Auth
      { path: "auth/simple/login", element: <SimpleLoginPage /> },
      { path: "auth/simple/register", element: <SimpleRegisterPage /> },
      { path: "auth/simple/forgot-password", element: <SimpleForgotPasswordPage /> },
      { path: "auth/simple/confirm-mail", element: <SimpleConfirmMailPage /> },
      { path: "auth/simple/reset-password", element: <SimpleResetPasswordPage /> },
      { path: "auth/simple/lock-screen", element: <SimpleLockScreenPage /> },

      // Card Auth
      { path: "auth/card/login", element: <CardLoginPage /> },
      { path: "auth/card/register", element: <CardRegisterPage /> },
      { path: "auth/card/forgot-password", element: <CardForgotPasswordPage /> },
      { path: "auth/card/confirm-mail", element: <CardConfirmMailPage /> },
      { path: "auth/card/reset-password", element: <CardResetPasswordPage /> },
      { path: "auth/card/lock-screen", element: <CardLockScreenPage /> },

      // Split Auth
      { path: "auth/split/login", element: <SplitLoginPage /> },
      { path: "auth/split/register", element: <SplitRegisterPage /> },
      { path: "auth/split/forgot-password", element: <SplitForgotPasswordPage /> },
      { path: "auth/split/confirm-mail", element: <SplitConfirmMailPage /> },
      { path: "auth/split/reset-password", element: <SplitResetPasswordPage /> },
      { path: "auth/split/lock-screen", element: <SplitLockScreenPage /> },
    ],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);

export default router;
