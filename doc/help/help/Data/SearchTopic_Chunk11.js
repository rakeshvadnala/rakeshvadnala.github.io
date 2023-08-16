define({"816":{y:0,u:"../systemconfig/tempdirectives.htm",l:-1,t:"Directives (Commands)",i:0.000687415299166424,a:"These are the key commands of the Velocity Template Language that are most frequently used in IdentityIQ email templates to dynamically determine the text that is printed in each email message. #If… #elseif… #else… #end\t Conditional evaluation\t #if($requester) requested by ..."},"817":{y:0,u:"../systemconfig/vtlvsvariablenotation.htm",l:-1,t:"VTL vs. $(variableName) Notation",i:0.000687415299166424,a:"The VTL reference syntax must not be confused with the $(variableName) notation used for variable referencing in other IdentityIQ XML objects, such as Workflows. Velocity does not recognize this syntax and is unable to parse text that uses it. When IdentityIQ detects this syntax in any element of an ..."},"818":{y:0,u:"../systemconfig/incorpvtl.htm",l:-1,t:"Incorporating VTL in Email Template XML",i:0.000535647423345223,a:"All input arguments in the template signature are automatically loaded into the VelocityContext and are therefore accessible through the VTL reference notation for inclusion in the message text. Additionally, Velocity commands can be used in determining the text to print in the messages. Excerpts ..."},"819":{y:0,u:"../systemconfig/where_to_use_vtl.htm",l:-1,t:"Where to Use VTL",i:0.000611531361255823,a:"The Velocity Template Language syntax can be specified in any attribute or element that is used to build the email message. Most commonly, this means the \u003cSubject\u003e and \u003cBody\u003e elements of the message, but the cc and bcc recipients (as well as the from email address) are often dynamically specified ..."},"820":{y:0,u:"../systemconfig/reference_variables.htm",l:-1,t:"Reference Variables",i:0.00407451019261983,a:"For HTML contained within variables, refer to  Reference Variables . When a variable name is referenced within the text for any of the message elements, its value is substituted into the text in its place.   Example: Copy \u003cBody\u003e$certifierName has accepted the challenge for \u0027$challengeItem\u0027 and will ..."},"821":{y:0,u:"../systemconfig/conditional_statements.htm",l:-1,t:"Conditional Statements",i:0.000611531361255823,a:"Conditional statements can be used to determine whether text should be included in the message or to choose alternate wording based on attribute values. Whole paragraphs can be included or omitted based on conditional tests. Copy #if ($remindersRemaining \u003e 0) This work item will escalate after ..."},"822":{y:0,u:"../systemconfig/method_calls.htm",l:-1,t:"Method Calls",i:0.000611531361255823,a:"Methods within object arguments can be accessed directly through the method reference syntax.  Copy #if($expiration) #if($expiration.getTime() \u003e $nowDate.getTime()) is due on $spTools.formatDate($expiration,3,1). #{else} was due on $spTools.formatDate($expiration,3,1). #{end} #{else} was due on ..."},"823":{y:0,u:"../systemconfig/sptools_function_library.htm",l:-1,t:"SPTools Function Library",i:0.000611531361255823,a:"Immediately before any template is submitted for evaluation by the Velocity engine, the spTools argument is added to the VelocityContext so the template can access its methods. SpTools is a function library that contains a few localization utility methods to help with message formatting -- primarily ..."},"824":{y:0,u:"../systemconfig/cdata_blocks.htm",l:-1,t:"CDATA Blocks",i:0.000611531361255823,a:"When any component of the email message (body, subject, cc, etc.) contains characters that are illegal in XML text (e.g. characters like \u003c and \u0026 that are interpreted by the parser as the start of an XML element or character entity, respectively), the entire component must be expressed in a CDATA ..."},"825":{y:0,u:"../systemconfig/emailfromrule.htm",l:-1,t:"Sending an Email from a Rule",i:0.000535647423345223,a:"Some installations may require notifications to be sent based on events that are not covered by the automated system notifications. Rules can often be used to drive these notifications. The example below shows how to send an email from a rule.  Copy \u003c?xml version=\u00271.0\u0027 encoding=\u0027UTF-8\u0027?\u003e \u003c!DOCTYPE ..."},"826":{y:0,u:"../systemconfig/using_a_rule_to_test_tem.htm",l:-1,t:"Using a Rule to Test Templates and Email Configuration",i:0.000990951050808824,a:"This example rule can also be used to test the email server configuration or to test any email template. Complete these steps to use the rule for testing purposes: To test email templates independently from the email server configuration without actually sending emails through the server, choose ..."},"827":{y:0,u:"../systemconfig/encryption.htm",l:-1,t:"Data Encryption",i:0.00166477792803177,a:"Data encryptions is done using four basic concepts: the keystore, master password, encrypted data synchronization, and the keystore console. KeyStore — the location where the encryption keys used by IdentityIQ are persisted. Master Password — the entire keystore can be encrypted with an ascii ..."},"828":{y:0,u:"../systemconfig/keystoreconsolecommands.htm",l:-1,t:"spt KeyStore Console Commands",i:0.00100733965646721,a:"The iiq keystore command is the interface to update the keystore and keystore password. A master password can to be entered into the console or generated when it is being updated. The keyStore console supports the following commands: use KeyStoreFilemasterFile If you do not call the use command, the ..."},"829":{y:0,u:"../systemconfig/encrypted_data_synchroni.htm",l:-1,t:"Encrypted Data Synchronization",i:0.00100733965646721,a:" The Encrypted Data Synchronization task goes over the objects re-encrypting the values using the newest key.  The Encrypted Data Synchronization task is not enabled upon installation, you must create the task from the New Task drop-down menu. The task encrypts the following attributes/types by ..."},"830":{y:0,u:"../systemconfig/using__keystore.htm",l:-1,t:"Using IdentityIQ KeyStore",i:0.00100733965646721,a:"Make sure to store copies of the iiq.dat and iiq.cfg files in a safe place. When you upgrade or reinstall IdentityIQ, the files are readily available to be restored. Make sure that the file permissions are set to allow access only by the application server that runs IdentityIQ. In a standard ..."},"831":{y:0,u:"../systemconfig/configuration.htm",l:-1,t:"Configuration",i:0.000749709235404979,a:"The keystore is stored in WEB-INF/classes/iiq.dat with an accompanying configuration file WEB-INF/classes/iiq.cfg. The iiq.properties file provides two options to specify an alternative location for iiq.dat and iiq.cfg. In the default iiq.properties, these options (keyStore.file and ..."},"832":{y:0,u:"../systemconfig/key_creation.htm",l:-1,t:"Key Creation",i:0.000749709235404979,a:"To create or manage the keystore: navigate to the WEB-INF/bin folder and start the IdentityIQ KeyStore console with the keystore command: Navigate to the WEB-INF/bin folder and start the IdentityIQ Keystore console with the keystore command. iiq keystore The console displays a prompt similar to the ..."},"833":{y:0,u:"../systemconfig/re_encrypt_passwords.htm",l:-1,t:"Re-Encrypt Passwords",i:0.000749709235404979,a:"The new encryption key is used for newly encrypted passwords. However, because existing passwords can also be decrypted using the default method on any system, you must re-encrypt existing passwords. Ro re-encrypt existing password, you must create a new Encrypted Data Synchronization Task in ..."},"834":{y:0,u:"../systemconfig/using_the_different_encr.htm",l:-1,t:"Using the Different Encryption Keys",i:0.000749709235404979,a:"After a new key is added to the keystore, the key is used as the default encryption key. Everything encrypted inside IdentityIQ then uses the new key. For example: $ ./iiq console   \u003e encrypt test   2:bt7YJA6iovzF5Uu6RIjueg==   \u003e   There is one exception. The command iiq encrypt, continues to use ..."},"835":{y:0,u:"../tasks/tasks.htm",l:-1,t:"Tasks",i:0.00197477869881727,a:"Tasks"},"836":{y:0,u:"../tasks/admin_tasks.htm",l:-1,t:"Tasks Overview",i:0.000763299237077024,a:"When working with tasks, do not open multiple tabs or browsers. Opening multiple tabs might cause a change in one tab to overwrite changes made in another. Task are used to automate the processes which build, update, and maintain the information in IdentityIQ. Tasks perform periodic operations such ..."},"837":{y:0,u:"../tasks/working_with_tasks.htm",l:-1,t:"Working with Tasks",i:0.000964819689295555,a:"To run or execute a task, right-click on the task name and select Execute or Execute in background. Execute displays a pop-up progress window and opens the Task Result page when it is complete. Execute in background launches the task in the background and you must go to the Tasks Results page to ..."},"838":{y:0,u:"../tasks/how_to_create_a_new_task.htm",l:-1,t:"How to Create a New Task",i:0.000672331410654834,a:"Use the New Task page to create a task based on the task types provided. Tasks can be as general or specific as required. See  Task Types  for the complete list of tasks types available in IdentityIQ. Click or mouse over the Setup tab and select Tasks to open the Tasks page. Select a task type from ..."},"839":{y:0,u:"../tasks/how_to_edit_a_task.htm",l:-1,t:"How to Edit a Task",i:0.000672331410654834,a:"Use the Edit Task page to make changes to an existing task. There is no Save As function on the Edit Task page. Any changes made to an existing task overwrite the task you are editing. You must use the Create New Task drop-down menu to create a new task. Procedure Click or mouse over the Monitor tab ..."},"840":{y:0,u:"../tasks/how_to_schedule_a_task.htm",l:-1,t:"How to Schedule a Task",i:0.00242381880800177,a:"Use the New Schedule dialog to schedule tasks to run during times of low business activity. Schedule recurring tasks as needed to maintain routine compliance within your enterprise. The New Schedule dialog enables you to assign a unique name and description to the task schedule. This information is ..."},"841":{y:0,u:"../tasks/working_with_schedules.htm",l:-1,t:"Working with Schedules",i:0.00228713482069216,a:"To edit an existing schedule, click a schedule name or right-click and select Edit to display the Edit Schedule dialog.  See  How to Edit a Schedule . To delete a schedule, right-click the schedule name and select Delete from the drop-down menu. Click Yes on the confirmation pop-up to delete the ..."},"842":{y:0,u:"../tasks/how_to_edit_a_schedule.htm",l:-1,t:"How to Edit a Schedule",i:0.00247974789711428,a:"Use the Edit Schedule dialog Click or mouse over the Monitor tab and select Tasks to open the Tasks page. Click on the Schedule Tasks tab to display the list of scheduled tasks. Click a schedule name or right-click and select Edit to display the Edit Schedule dialog. Edit the name or description for ..."},"843":{y:0,u:"../tasks/task_admin.htm",l:-1,t:"Task Administration",i:0.000535647423345223,a:"Task administrators and system administrators have some tools both within the Task feature itself and in IdentityIQ\u0027s Administrator Console, to help them manage where and how tasks are run, and to troubleshoot common task issues.   Running Tasks on Specific Hosts If your IdentityIQ instance is ..."},"844":{y:0,u:"../tasks/tasks_page.htm",l:-1,t:"Tasks Page",i:0.00100980809513729,a:"The Tasks page contains a list of all of the tasks that have been created. The first time you access the Task page you see the predefined tasks provided by SailPoint. The tasks are grouped into categories based on the task type. You can expand or contract the categories on the grid using the plus ..."},"845":{y:0,u:"../tasks/predefined_tasks.htm",l:-1,t:"Predefined Tasks",i:0.000964819689295555,a:"SailPoint provides a number of predefined tasks that can be run to aggregate, correlate and refresh information within your enterprise. The predefined tasks are not templates that can be used to create new tasks. Changes made to these tasks overwrite exiting information. To create new task you must ..."},"846":{y:0,u:"../tasks/scheduled_tasks.htm",l:-1,t:"Scheduled Tasks Page",i:0.00390298505195419,a:"The Scheduled Tasks page contains a list of all scheduled tasks, whether recurring or one-time only. One-time tasks are removed from the list after they are executed. Tasks that are scheduled, but do not execute due to malformed task definitions are displayed in the Scheduled Task table with an ..."},"847":{y:0,u:"../tasks/task_results.htm",l:-1,t:"Task Results Page",i:0.0030319867741778,a:"The Task Results page contains a list of all of the tasks that have run or are currently running. Use the search options to limit the number of tasks displayed in the table. Entering a letter, or partial name, in the Search field displays any tasks with names containing that letter pattern. Click ..."},"848":{y:0,u:"../tasks/task_types.htm",l:-1,t:"Task Types",i:0.00349130025518773,a:"The task types are: Account Aggregation — scan all applications, discover users and entitlements on those applications, and then correlate those users and entitlements with roles. See  Account Aggregation .  Account Group Aggregation — scans applications and aggregates account groups and application ..."},"849":{y:0,u:"../tasks/account_aggregation.htm",l:-1,t:"Account Aggregation",i:0.00129942917683047,a:"Account Aggregation tasks scan all applications, discover users and entitlements on those applications, and, optionally correlates those users and entitlements with roles. Identities that have changed since the last aggregation performed on an application are marked as needing refresh to increase ..."},"850":{y:0,u:"../tasks/account_group_aggregatio.htm",l:-1,t:"Account Group Aggregation",i:0.000631377930692478,a:"An Account Group Aggregation task scans applications and aggregates account groups and application object types. These results are then used for group certification (either permissions or membership), for displaying group information in certifications, and for performing identity searches. The ..."},"851":{y:0,u:"../tasks/activity_aggregation.htm",l:-1,t:"Activity Aggregation",i:0.000631377930692478,a:"Activity Aggregation tasks scan all applications, discover activity on the applications, and then correlate that activity with identity cubes. Using these tasks enables you to track and monitor activity within your enterprise. The information scanned and updated is determined by the following ..."},"852":{y:0,u:"../tasks/alert_aggregation.htm",l:-1,t:"Alert Aggregation",i:0.000631377930692478,a:"Alert Aggregation tasks scan applications and aggregates alerts from a set of Alert Collectors. These are then used to generate alert actions.  The information scanned and updated is determined by the following criteria when the task is created or edited. You can use any combination of options to ..."},"853":{y:0,u:"../tasks/alert_processor.htm",l:-1,t:"Alert Processor",i:0.000631377930692478,a:"Alert Processor Alert Processor tasks process the aggregated alerts against the alert definitions and launch the appropriate action. The information scanned and updated is determined by the following criteria when the task is created or edited. You can use any combination of options to build a task."},"854":{y:0,u:"../tasks/application_builder.htm",l:-1,t:"Application Builder",i:0.000631377930692478,a:"The Application Builder task lets you create multiple IdentityIQ applications, and update existing applications in bulk. The task also includes the ability to perform account and group aggregation for a host using the associated application. It can also export essential data about your existing ..."},"855":{y:0,u:"../tasks/arcsight_data_export.htm",l:-1,t:"ArcSight Data Export",i:0.00420633046634638,a:"Export data for HP ArcSight Database Connector to an external database table. The ArcSight data export task enables you to export IdentityIQ data to external tables. Before you can use the ArcSight data export task, you must create the export databases on your destination data source. The task ..."},"856":{y:0,u:"../tasks/data_export.htm",l:-1,t:"Data Export",i:0.000631377930692478,a:"The Data Export task enables you to export IdentityIQ data to an external database. You can select to export any combination of identity, account, and certification data.  Before you can use the Data Export task, you must create the export database tables on your destination data source.  The task ..."},"857":{y:0,u:"../tasks/effective_access_indexin.htm",l:-1,t:"Effective Access Indexing",i:0.000631377930692478,a:" Effective Access is any indirect access that was granted through another object, such as a nested group, an unstructured target, or another role.  After you complete customizing your task options, click Save for later use or Save and Execute to save the task and run it immediately."},"858":{y:0,u:"../tasks/encrypted_data_synchroni.htm",l:-1,t:"Encrypted Data Synchronization Task",i:0.000631377930692478,a:"The Encrypted Data Synchronization Task is used to re-encrypt IdentityIQ data when a new custom encryption key is generated.  Once you have completed customizing your task options, click Save for later use or Save and Execute to save the task and run it immediately."},"859":{y:0,u:"../tasks/entitlement_role_generat.htm",l:-1,t:"Entitlement Role Generator",i:0.000631377930692478,a:"The Entitlement Role Generator creates an Entitlement Role for every entitlement found in a specified application. Recommended role types are Entitlement or IT.  You can further refine creation by specifying an entitlement name or permission target so that only entitlements matching the specified ..."},"860":{y:0,u:"../tasks/classification.htm",l:-1,t:"File Access Manager Classification",i:0.000859029744424278,a:"The File Access Manager Classification task is used when you are integrating with File Access Manager, to use File Access Manager’s classification to flag and categorize entitlements within IdentityQ. This task retrieves classification data from File Access Manager and assigns it to entitlements ..."},"861":{y:0,u:"../tasks/itim_application_creator.htm",l:-1,t:"ITIM Application Creator",i:0.000631377930692478,a:"Run the ITIM Application Creator task to inspect IBM Tivoli Identity Manager (ITIM) and retrieve information about the ITIM services (applications). This task auto-generates an application for each service defined in ITIM. Each ITIM application contains a list of services that are roughly equivalent ..."},"862":{y:0,u:"../tasks/cloudgatewaysync.htm",l:-1,t:"IdentityIQ Cloud Gateway Synchronization",i:0.000631377930692478,a:"IdentityIQ Cloud Gateway Synchronization tasks scan selected IdentityIQ applications for specified objects and synchronizes them with IdentityIQ Cloud applications. It is intended for use when IdentityIQ is not able to communicate directly with the managed system. "},"863":{y:0,u:"../tasks/identity_refresh.htm",l:-1,t:"Identity Refresh",i:0.00450993685497575,a:"Refresh identity tasks scan all identities to ensure that all identity information is up-to-date and accurate. Refresh identity scans are also used to detect and report on policy violations and launch event certifications. Incremental identity refresh can be configured to only refresh those ..."},"864":{y:0,u:"../tasks/deltaidentityrefresh.htm",l:-1,t:"Refreshing Changed Identities Only (Delta Identity Refresh)",i:0.00157848021597662,a:"A \"delta\" identity refresh lets you update only those Identity Cubes that have changed\nsince your last aggregation(s), rather than updating all identities. This can result in a\nsignificant reduction in refresh time, and can remove or reduce the need to\npartition your identities into subsets for ..."},"865":{y:0,u:"../tasks/identity_request_mainten.htm",l:-1,t:"Identity Request Maintenance",i:0.00120836845133775,a:"The Identity Request Maintenance task scans all Lifecycle Manager access requests to ensure that all identity change requests were provisioned.  Partitioning is available to speed the processing time for this task, and to level the load on the machines running these tasks. Partitioning is used to ..."},"866":{y:0,u:"../tasks/missing_managed_entitlem.htm",l:-1,t:"Missing Managed Entitlements Scan",i:0.000631377930692478,a:"Missing Managed Entitlement Scan tasks scan the selected application and create any entitlement objects for items added after the application was last aggregated. Select the applications to include in the scan. At least one application must be specified. Click the arrow to the right of the ..."},"867":{y:0,u:"../tasks/oim_application_creator.htm",l:-1,t:"OIM Application Creator",i:0.000631377930692478,a:"Run the OIM Application Creator task to inspect Oracle Identity Manager applications and retrieve information about the applications to which they are connected. This task generates an IdentityIQ application for applications connected to the OIM application specified. The applications generated by ..."},"868":{y:0,u:"../tasks/policy_scan.htm",l:-1,t:"Policy Scan",i:0.000631377930692478,a:"The Policy task type is used to run policies against identity cubes and update identity score cards with any policy violations discovered. IdentityIQ provides the Check Active Policies task as a global policy update task.  The information scanned and updated is determined by the following criteria ..."},"869":{y:0,u:"../tasks/propagate_role_changes.htm",l:-1,t:"Propagate Role Changes",i:0.00161938747405017,a:"IdentityIQ does not propagate role changes for entitlements on applications that do not support direct provisioning and would require the creation of multiple work items. If required, a business process can be enabled in the System Configuration settings to handle that situation. Entitlements that ..."},"870":{y:0,u:"../tasks/refresh_logical_accounts.htm",l:-1,t:"Refresh Logical Accounts",i:0.000631377930692478,a:"The Refresh Logical Accounts task type is used to refresh composite accounts for all identities that could, potentially, have a logical account on the applications selected. This refresh occurs without performing aggregation on the logical or tiered applications containing the links. A logical ..."},"871":{y:0,u:"../tasks/role_index_refresh.htm",l:-1,t:"Role Index Refresh",i:0.00108668155815608,a:"Role Index Refresh A role index refresh task updates all role information and creates the indexes needed to perform role searches. You must run this task before performing any role searching."},"872":{y:0,u:"../tasks/roleentitlementassocs.htm",l:-1,t:"Role-Entitlement Associations",i:0.000631377930692478,a:"This task deletes existing role-entitlement associations then analyzes each role in the system and creates associations between the role and any granted entitlements.  This task only needs to be run one time to establish role associations to entitlements and permissions; once it has been run, ..."},"873":{y:0,u:"../tasks/run_rule.htm",l:-1,t:"Run Rule",i:0.000631377930692478,a:"A task used to run an arbitrary rule with a series of name/value pairs. You must have to configure some return statement as string. From your code, you have to return some meaningful string to the task. In your task definition declare:          \u003cReturns\u003e             \u003cArgument name=\"tskSuccess\" ..."},"874":{y:0,u:"../tasks/sequential_task_launcher.htm",l:-1,t:"Sequential Task Launcher",i:0.000724064980483882,a:"Sequential Task Launcher A sequential task launcher initiates the specified tasks in the order defined. This enables you to run tasks sequentially without having to schedule each separately based on estimated run times."},"875":{y:0,u:"../tasks/system_maintenance.htm",l:-1,t:"System Maintenance",i:0.000631377930692478,a:"SailPoint provides System Maintenance tasks with the IdentityIQ application, the Work Item Expiration Scanner, Mitigation Expiration Scanner, System Maintenance, System Maintenance Object Pruner, Role Overlap Analysis, and the Synchronize Roles task. These tasks are configured, by default, to run in ..."},"876":{y:0,u:"../tasks/performmaint.htm",l:-1,t:"Perform Maintenance ",i:0.00107232329944725,a:" The Perform Maintenance is a predefined system maintenance task that performs a variety of essential operational activities. It prunes identity snapshots, task results, and certifications, escalates orphaned work items, and performs other background maintenance tasks. The predefined Perform ..."},"877":{y:0,u:"../tasks/target_aggregation.htm",l:-1,t:"Target Aggregation",i:0.000907510084604777,a:"A target aggregation task scans applications and aggregates activity targets from those applications. These targets are then used for activity monitoring and risk assessment. Select the applications to include in the scan. If no applications are specified, all applications are included. Click the ..."},"878":{y:0,u:"../tasks/how_to_complete_task_wor.htm",l:-1,t:"How to Complete Task Work Items",i:0.000672331410654834,a:"Task work items are generated by task that require sign off on the results they create, and those sign off request that are forwarded by a designated signer. Sign off request are displayed on your Home Page and you are notified through an email when the work item is created. Sign off decisions are ..."},"879":{y:0,u:"../workitems/workitems.htm",l:-1,t:"Work Items",i:0.000535647423345223,a:"Work Items"},"880":{y:0,u:"../workitems/workitemadmin.htm",l:-1,t:"Work Item Administration",i:0.00102439648030252,a:"To edit priorities in IdentityIQ, the Allow priority editing on work items option must be selected on the Work Item tab IdentityIQ Configuration page located under the gear icon. If a work item is created for a user who is no longer active in IdentityIQ, it is forwarded to the manager or supervisor ..."},"881":{y:0,u:"../workitems/manageworkitems.htm",l:-1,t:"Work Items",i:0.00114998828280965,a:"The Work Items page provides a central location where you can view and manage work items that are assigned to you or to a workgroup of which you are a member. A work item is anything that requires an action before it is completed. Work items can be entire processes, such as access reviews, or any ..."},"882":{y:0,u:"../workitems/work_item_archive.htm",l:-1,t:"Work Item Archive",i:0.00102439648030252,a:"Use the Work Item Archive page to view completed work items. Only work items types that are configured in System Setup can be viewed on the Work Item Archive page. To access the system settings for Work Items, navigate to the IdentityIQ Configuration \u003e Work Items tab under the gear icon. Click the ..."},"883":{y:0,u:"../tasks/iqservice_public_key_exc.htm",l:-1,t:"IQService Public Key Exchange",i:0.000631377930692478,a:"IQService Public Key Exchange Run the IQService Public Key task to change the public keys that are used for IQService communications."},"884":{y:0,u:"../rolemgmt/profile_edit_basic.htm",l:-1,t:"How to Edit a Profile",i:0.000727704077353247,a:"A profile is a set of entitlements on a specific application. An entitlement is either a specific value for an account attribute, most commonly group membership, or a permission. Profiles are specific to one role. To edit a profile. Access the Entitlement panel from the Role Editor page. Edit the ..."},"885":{y:0,u:"../systemconfig/compmanemaltemp.htm",l:-1,t:"Email Templates",i:0.000727448184093569,a:"Email Templates Much of the communication performed during the access review process is done through email notifications sent automatically by IdentityIQ as an access review proceeds through its life cycle. Use this section to specify the template to use for each certification-related notice."},"886":{y:0,u:"../tasks/novell_application_creat.htm",l:-1,t:"Novell Application Creator",i:0.000631377930692478,a:"Run the Novell Application Creator task to inspect Novell IDM applications and retrieve information about the applications to which they are connected. This task generates an IdentityIQ application for applications connected to the Novell IDM application specified. The applications generated by this ..."},"887":{y:0,u:"../tasks/fim_application_creator.htm",l:-1,t:"FIM Application Creator",i:0.000631377930692478,a:"Run the FIM Application Creator task automatically discover and create FIM Management Agent Applications. This task auto-generates an application for each management agent defined in FIM. The applications generated by this task are added to the list of applications in IdentityIQ."},"888":{y:0,u:"../systemconfig/rpa_bot_identities.htm",l:-1,t:"Robotic Process Automation (Bot) Identities",i:0.000704420662134955,a:"IdentityIQ supports the use of Robotic Process Automation (RPA) or bot identities. An RPA or bot is an application that can perform automated tasks, especially simple, repetitive tasks such as requesting access and managing identities. Bots require effective governance just as traditional identities ..."},"889":{y:0,u:"../reports/reportlayoutsysad.htm",l:-1,t:"Report Layout",i:0.000885819764819709,a:"The Report Layout page shows the columns that are available for inclusion on the report and the columns selected for inclusion on the report. It allows the user to select a sort field and a group field if desired. It also allows suppression of either the summary or the detail information as needed. ..."},"890":{y:0,u:"../systemadmin/alert_definitions_page.htm",l:-1,t:"Alert Definitions Page",i:0.000687415299166424,a:"Alert Definitions Page Use the Alert Definition page to view a list of existing alert definitions. The Alerts page contains the following information:    "},});