export const groups = [
  {title:'Accounts & reporting', items:[
    ['accounts','Customer & contract management','Service locations, departments, billing accounts and contract terms.'],
    ['standing-orders','Standing orders & service schedules','Recurring service by account, with separate frequencies for individual standing orders.'],
    ['pricing','Contract pricing & recurring billing','Price by piece, weight, soil count or flat rate. Set invoice schedules and account-specific terms.'],
    ['payments','Invoicing, payments & credits','Invoice documents, adjustments, returns, credits and settlement records.'],
    ['ai','AI reporting through MCP','Connect an AI assistant to approved report lookups through the Model Context Protocol, including billed and served piece counts by date range.'],
    ['reporting','Reporting & dashboards','Service quantities, pieces billed and served, soil history, route revenue and commissions.'],
    ['finance','Accounting & payroll integrations','NetSuite and QuickBooks Desktop accounting connections, PayTrace payments and UKG timecard imports.']
  ]},
  {title:'Plant & textiles',items:[
    ['soil','Soil tracking','Electronic soil tickets, item counts, weights and customer soil history.'],
    ['rfid','RFID & barcode tracking','Tag assignment, batch reads and item history with compatible readers and scanners.'],
    ['garments','Garment & wearer management','Wearer assignments, garment changes, returns, loss records and item retirement.'],
    ['loading','Production loading & packout','Customer and route loads, split bundles, packing instructions and load verification.'],
    ['shortages','Shortage tracking & alerts','Planned and packed quantities, late additions and missed ready times.'],
    ['equipment','Rail, scale & printer integrations','Plant-specific connections for rail sorting, weighing and label printing. Equipment and interface scope are agreed for each installation.'],
    ['forms','Electronic forms & label printing','Configurable mobile forms, packing slips and on-demand plant labels.']
  ]},
  {title:'Routes & customer service',items:[
    ['routes','Route planning & optimization','Optimize stop sequence for driving time or distance, customer service windows and time at the stop.'],
    ['dispatch','Dispatch & GPS fleet tracking','Driver and vehicle assignments, route changes, current locations and GPS history.'],
    ['mobile','Mobile delivery & pickup','MobileWorker route downloads, delivery records, pickup counts and field adjustments.'],
    ['proof','Proof of delivery & signatures','Delivery confirmations, electronic signatures and route representative notes.'],
    ['custody','Chain-of-custody tracking','Pickup, transfer and delivery records with location verification where required.'],
    ['settlement','Driver settlement & timekeeping','End-of-day settlement, time records, vehicle inspections and role-specific forms.'],
    ['customer-ordering','Customer ordering portal','Customer orders, editing cutoffs, manifests and invoice copies by location.']
  ]}
];
export const nav=[['products','Products'],['industries','Industries'],['services','Services'],['about','About MCC']];
export const industries=[
  {key:'laundry',title:'Laundry & textile rental',intro:'Route accounting for commercial laundries, hospital laundry divisions and acute-care linen service.',sections:[
    ['Commercial laundry & rental','Customer agreements, garment and wearer records, mat service, soil tracking, production loads and route billing.'],
    ['Hospital divisions & acute care','Departmental orders, cart assignments, cart contents, weight verification and delivery records for each receiving location.'],
    ['Customer-owned goods','Receiving, processing, packout and return of textiles owned by the customer, with separate records by department or location.']
  ]},
  {key:'records',title:'Document storage & shredding',intro:'Mobile records for storage requests, container pickups and secure destruction.',sections:[
    ['Document storage','Box identification, shelf and pallet assignments, customer storage records and retrieval requests.'],
    ['Shredding services','Scheduled collection, container records, driver work orders and destruction signatures.'],
    ['Chain of custody','Track material at pickup and transfer. Match custody records to the customer and the service performed.']
  ]}
];
export const services=[
  ['consulting','Consulting','Workflow review, requirements and equipment assessment with office, plant and route teams.'],
  ['integration','Integration services','Connections to accounting, payments, timekeeping and plant equipment. Define the records, timing and responsibilities for each exchange.'],
  ['development','Development engineering','Custom forms, calculation rules, reports, printing layouts and software interfaces.'],
  ['deployment','Deployment support','System configuration, device setup, interface testing and phased rollout around operating schedules.'],
  ['training','Training','Role-specific instruction for administrators, production staff and mobile teams, with on-site, online and refresher options.'],
  ['experience','Customer experience services','Direct support for the configuration in use. MCC works with your team on operational issues, equipment changes and new requirements.']
];
export const connected=[
  ['customer-portal','Customer portal','Order entry, changes before cutoff, delivery manifests and invoice copies.'],
  ['mobileworker','MobileWorker','Delivery and pickup, field adjustments, inspections, signatures and route settlement.'],
  ['integrations','Integrations','Plant equipment, finance, document signing, timekeeping and AI reporting.']
];
export const operations = ['operations','Operations workspace','Dispatch, production loads, customer agreements and billing for your office and plant teams.'];
export const articles = {
  operations:{title:'Operations workspace',intro:'The staff workspace in MLINX for the people who schedule routes, manage customer accounts and run billing.',sections:[
    ['Dispatch & production','Manage recurring orders, assign drivers and review the packing requirements for each run. Compare planned and loaded quantities before departure.'],
    ['Accounts & billing','Manage service locations, contract rates, invoice adjustments and payment records.'],
    ['Management reporting','Review route activity, billed and served pieces, revenue and credits. Access is configured for each team’s responsibilities.']
  ]},
  'customer-portal':{title:'Customer portal',intro:'Order management and delivery records for the customer locations you serve.',sections:[
    ['Ordering','Give authorized contacts access to upcoming orders, item quantities and the editing window for their location.'],
    ['Delivery records','Order history, delivery status and downloadable manifests for receiving staff.'],
    ['Invoices & reporting','Invoice PDFs and location reports for authorized contacts.']
  ]},
  mobileworker:{title:'MobileWorker',intro:'MCC’s mobile application for route delivery, field records and end-of-day settlement.',sections:[
    ['Route service','Assigned stops, customer instructions, item quantities, delivery adjustments and pickup records.'],
    ['Mobile capture','Barcode scanning, electronic forms, signatures and location-based handoff records. Compatible devices can capture weights.'],
    ['Driver records','Vehicle inspections, timekeeping and settlement forms configured for the driver’s responsibilities.']
  ]},
  integrations:{title:'MLINX integrations',intro:'MCC configures connections around your equipment, software versions and reporting requirements.',sections:[
    ['Plant systems','Rail and sortation interfaces, soil-counting equipment, RFID readers, scales, barcode scanners and label printers. Implementation depends on the installed equipment.'],
    ['Accounting & payments','NetSuite, QuickBooks Desktop and PayTrace connections for agreed finance and settlement workflows.'],
    ['Documents & timekeeping','PandaDoc document generation and signature tracking, and UKG timecard import.'],
    ['AI reporting','Approved business lookups through MCP. An assistant can retrieve configured figures such as billed and served pieces for a specified date range.']
  ]},
  ...Object.fromEntries(industries.map(i=>[i.key,i])),
  about:{title:'Mobile Computing Corp.',intro:'Since 1986, MCC has built software for companies whose work happens in the field. From our base in Mississauga, Ontario, we focus today on route accounting for commercial laundries.',sections:[
    ['A history in mobile service','Our early work in mobile workforce automation helped the office keep a reliable record of work completed miles away. That experience extends across equipment service, document storage and shredding, and textile rental. In laundry operations, it shows up in MLINX’s route records, garment tracking and proof of delivery.'],
    ['Built with the people who use it','Our team spends time with mobile workers and office staff to understand the terms, forms and equipment already in place. For a laundry, that can mean configuring billing by customer, connecting a plant scale or adapting a driver’s form. We develop and test the connections with the people who will depend on them.'],
    ['Working with American Textile Maintenance','MCC worked with American Textile Maintenance in Los Angeles to extend its mobile delivery tools into plant receiving and shipping. Its food-service and medical linen divisions had different packing requirements. Both gained electronic soil tickets and on-demand packing labels. <a href="https://mobilecom.com/wp-content/uploads/2015/03/TRSA_March_2015.pdf">Read the Textile Services article (PDF)</a>.'],
    ['From rollout to long-term support','We plan installations in phases and train administrators, plant staff and drivers for their roles. As service agreements, equipment and procedures change, our customer experience team supports the configuration in use. Some MCC customers have worked with successive generations of MLINX.']
  ]}
};
export const titles={products:'MLINX',industries:'Industries',services:'Services',contact:'Contact MCC',...Object.fromEntries(Object.entries(articles).map(([k,v])=>[k,v.title]))};
