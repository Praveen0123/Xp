import { Menu } from './menu.model';
 
export const verticalMenuItems = [
    new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
    new Menu(2, 'Manage Users', '/instanttransport/manageusers', null, 'accessible', null, true, 0, "white"),
    new Menu(3, 'Lanes', '/instanttransport/lanes', null, 'accessible', null, true, 0, "white"),
    new Menu(4, 'Transactions', '/instanttransport/transactions', null, 'dvr', null, true, 0, "white"),
    new Menu(5, 'Capacity', '/instanttransport/lanes/capacity', null, 'accessible', null, true, 3, "white"),
    new Menu(6, 'Orders', '/instanttransport/lanes/orders', null, 'accessible', null, true, 3, "white"),
    new Menu(7, 'Trips', '/instanttransport/lanes/trips', null, 'accessible', null, true, 3, "white"),
    new Menu(8, 'Customers', '/instanttransport/manageusers/customers', null, 'accessible', null, true, 2, "white"),
    new Menu(9, 'Fleet Vendors', '/instanttransport/manageusers/fleetvendors', null, 'accessible', null, true, 2, "white"),
    new Menu(10, 'Invoice', '/instanttransport/transactions/invoice', null, 'accessible', null, true, 4, "white"),
    new Menu(11, 'Payments', '/instanttransport/transactions/payments', null, 'accessible', null, true, 4, "white"),
    new Menu(12, 'Scheduling', '/instanttransport/scheduling', null, 'accessible', null, true, 0, "white"),,
    new Menu(13, 'Admin', '/instanttransport/admin', null, 'accessible', null, true, 0, "white"),
    new Menu(14, 'Profile', '/instanttransport/admin/profile', null, 'accessible', null, true, 13, "white"),
    new Menu(15, 'Preference', '/instanttransport/admin/preference', null, 'accessible', null, true, 13, "white"),
    new Menu(16, 'Fleet', '/instanttransport/fleet', null, 'accessible', null, true, 0, "white"),
    new Menu(17, 'Driver', '/instanttransport/fleet/driver', null, 'accessible', null, true, 16, "white"),
    new Menu(18, 'Lanes', '/instanttransport/fleet/lanes', null, 'accessible', null, true, 16, "white"),
    new Menu(19, 'Trucks', '/instanttransport/fleet/trucks', null, 'accessible', null, true, 16, "white"),
    new Menu(20, 'Loads', '/instanttransport/loads', null, 'accessible', null, true, 0, "white"),
    new Menu(21, 'Trips', '/instanttransport/trips', null, 'accessible', null, true, 0, "white"),
    new Menu(22, 'Payments', '/instanttransport/payments', null, 'accessible', null, true, 0, "white"),

]

export const horizontalMenuItems = [
    new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
    new Menu(2, 'Manage Users', '/instanttransport/manageusers', null, 'accessible', null, true, 0, "white"),
    new Menu(3, 'Lanes', '/instanttransport/lanes', null, 'accessible', null, true, 0, "white"),
    new Menu(4, 'Transactions', '/instanttransport/transactions', null, 'dvr', null, true, 0, "white"),
    new Menu(5, 'Capacity', '/instanttransport/lanes/capacity', null, 'accessible', null, true, 3, "white"),
    new Menu(6, 'Orders', '/instanttransport/lanes/orders', null, 'accessible', null, true, 3, "white"),
    new Menu(7, 'Trips', '/instanttransport/lanes/trips', null, 'accessible', null, true, 3, "white"),
    new Menu(8, 'Customers', '/instanttransport/manageusers/customers', null, 'accessible', null, true, 2, "white"),
    new Menu(9, 'Fleet Vendors', '/instanttransport/manageusers/fleetvendors', null, 'accessible', null, true, 2, "white"),
    new Menu(10, 'Invoice', '/instanttransport/transactions/invoice', null, 'accessible', null, true, 4, "white"),
    new Menu(11, 'Payments', '/instanttransport/transactions/payments', null, 'accessible', null, true, 4, "white"),
    new Menu(12, 'Scheduling', '/instanttransport/scheduling', null, 'accessible', null, true, 0, "white"),
    new Menu(13, 'Admin', '/instanttransport/admin', null, 'accessible', null, true, 0, "white"),
    new Menu(14, 'Profile', '/instanttransport/admin/profile', null, 'accessible', null, true, 13, "white"),
    new Menu(15, 'Preference', '/instanttransport/admin/preference', null, 'accessible', null, true, 13, "white"),
    new Menu(16, 'Fleet', '/instanttransport/fleet', null, 'accessible', null, true, 0, "white"),
    new Menu(17, 'Driver', '/instanttransport/fleet/driver', null, 'accessible', null, true, 16, "white"),
    new Menu(18, 'Lanes', '/instanttransport/fleet/lanes', null, 'accessible', null, true, 16, "white"),
    new Menu(19, 'Trucks', '/instanttransport/fleet/trucks', null, 'accessible', null, true, 16, "white"),
    new Menu(20, 'Loads', '/instanttransport/loads', null, 'accessible', null, true, 0, "white"),
    new Menu(21, 'Trips', '/instanttransport/tripsinvendor', null, 'accessible', null, true, 0, "white"),
    new Menu(22, 'Payments', '/instanttransport/payments', null, 'accessible', null, true, 0, "white"),

]

export const adminMenuItems = [
    new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
    new Menu(2, 'Manage Users', '/instanttransport/manageusers', null, 'people', null, true, 0, "white"),
    new Menu(3, 'Lanes', '/instanttransport/lanes', null, 'toll', null, true, 0, "white"),
    new Menu(4, 'Transactions', '/instanttransport/transactions', null, 'attach_money', null, true, 0, "white"),
    new Menu(5, 'Capacity', '/instanttransport/lanes/capacity', null, 'web_asset', null, true, 3, "white"),
    new Menu(6, 'Orders', '/instanttransport/lanes/trips', null, 'insert_comment', null, true, 3, "white"),
    new Menu(7, 'Trips', '/instanttransport/lanes/orders', null, 'subway', null, true, 3, "white"),
    new Menu(8, 'Customers', '/instanttransport/manageusers/customers', null, 'people', null, true, 2, "white"),
    new Menu(9, 'Fleet Vendors', '/instanttransport/manageusers/fleetvendors', null, 'directions_car', null, true, 2, "white"),
    new Menu(10, 'Invoice', '/instanttransport/transactions/invoice', null, 'accessible', null, true, 4, "white"),
    new Menu(11, 'Payments', '/instanttransport/transactions/payments', null, 'payment', null, true, 4, "white"),
    new Menu(12, 'Scheduling', '/instanttransport/scheduling', null, 'perm_media', null, true, 0, "white"),
    new Menu(13, 'Admin', '/instanttransport/admin', null, 'person', null, true, 0, "white"),
    new Menu(14, 'Hubs', '/instanttransport/admin/hubs', null, 'device_hub', null, false, 13, "white"),
    new Menu(15, 'Gateways', '/instanttransport/admin/gateways', null, 'person', null, false, 13, "white"),
    new Menu(16, 'Lanes', '/instanttransport/admin/lanes', null, 'import_export', null, false, 13, "white"),
    new Menu(17, 'Capacity', '/instanttransport/admin/capacity', null, 'person', null, false, 13, "white"),
    new Menu(18, 'Schedule', '/instanttransport/admin/schedule', null, 'event_available', null, false, 13, "white"),
    new Menu(19, 'TAT Master', '/instanttransport/admin/tatmaster', null, 'person', null, false, 13, "white"),
    new Menu(20, 'Barcodes', '/instanttransport/admin/barcodes', null, 'person', null, false, 13, "white"),
    new Menu(21, 'Offers', '/instanttransport/admin/offers', null, 'local_offer', null, false, 13, "white"),
    new Menu(22, 'Settings', '/instanttransport/admin/settings', null, 'settings_applications', null, false, 13, "white"),

]

export const vendorMenuItems = [
    new Menu(1, 'Fleet Dashboard', '/instanttransport/fleetDashboard', null, 'dashboard', null, false, 0, "white"),
    new Menu(14, 'Profile', '/instanttransport/admin/profile', null, 'emoji_people', null, true, 13, "white"),
    new Menu(15, 'Preference', '/instanttransport/admin/preference', null, 'near_me', null, true, 13, "white"),
    new Menu(16, 'Fleet', '/instanttransport/fleet', null, 'directions_car', null, true, 0, "white"),
    new Menu(17, 'Driver', '/instanttransport/fleet/driver', null, 'contacts', null, true, 16, "white"),
    new Menu(18, 'Lanes', '/instanttransport/fleet/lanes', null, 'import_export', null, true, 16, "white"),
    new Menu(19, 'Trucks', '/instanttransport/fleet/trucks', null, 'local_shipping', null, true, 16, "white"),
    new Menu(20, 'Loads', '/instanttransport/loads', null, 'local_shipping', null, true, 0, "white"),
    new Menu(21, 'Trips', '/instanttransport/tripsinvendor', null, 'local_taxi', null, true, 0, "white"),
    new Menu(22, 'Payments', '/instanttransport/payments', null, 'attach_money', null, true, 0, "white"),
    new Menu(13, 'Admin', '/instanttransport/admin', null, 'person', null, true, 0, "white"),

]

// export const horizontalMenuItems = [
//     new Menu(1, 'Dashboard', '/instanttransport/dashboard', null, 'dashboard', null, false, 0, "white"),
//     new Menu(2, 'Fleet', '/instanttransport/fleet', null, 'accessible', null, true, 0, "white"),
//     new Menu(3, 'Loads', '/instanttransport/loads', null, 'accessible', null, true, 0, "white"),
//     new Menu(4, 'Trips', '/instanttransport/trips', null, 'dvr', null, true, 0, "white"),
//     new Menu(5, 'Payments', '/instanttransport/payments', null, 'accessible', null, true, 0, "white"),
//     new Menu(6, 'Admin', '/instanttransport/admin', null, 'accessible', null, true, 0, "white"),
//     new Menu(7, 'Driver', '/instanttransport/fleet/driver', null, 'accessible', null, true, 2, "white"),
//     new Menu(8, 'Lanes', '/instanttransport/fleet/lanes', null, 'accessible', null, true, 2, "white"),
//     new Menu(9, 'Trucks', '/instanttransport/fleet/trucks', null, 'accessible', null, true, 2, "white"),
//     new Menu(10, 'Profile', '/instanttransport/admin/profile', null, 'accessible', null, true, 6, "white"),
//     new Menu(11, 'Preference', '/instanttransport/admin/prefence', null, 'accessible', null, true, 6, "white"),
//     // new Menu(12, 'Scheduling', '/instanttransport/scheduling', null, 'accessible', null, true, 0, "white")
// ]
