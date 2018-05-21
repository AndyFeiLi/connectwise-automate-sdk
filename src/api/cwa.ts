'use strict';

import * as querystring from 'querystring';
import fetch from 'isomorphic-fetch';
import { assign } from '../helpers/assign';


export interface AVTemplatePolicy {
    "TemplatePolicyId"?: string;
    "Name"?: string;
    "Description"?: string;
    "GUID"?: string;
}

export interface AVTemplatePolicyData {
    "TemplatePolicyId"?: string;
    "PluginGUID"?: string;
    "Data"?: string;
}

export interface AlertAction {
    "Id"?: number;
    "Name"?: string;
    "Comment"?: string;
}

export interface AuditAction {
    "Id"?: string;
    "Name"?: string;
    "Level"?: number;
    "Source"?: string;
}

export interface Client {
    "Id"?: string;
    "Name"?: string;
    "Company"?: string;
    "FirstName"?: string;
    "LastName"?: string;
    "Address1"?: string;
    "Address2"?: string;
    "City"?: string;
    "State"?: string;
    "ZipCode"?: string;
    "PhoneNumber"?: string;
    "FaxNumber"?: string;
    "Comment"?: string;
    "Country"?: string;
    "ExternalId"?: string;
    "Locations"?: Array<Location>;
}

export interface Command {
    "Id"?: string;
    "Name"?: string;
    "Description"?: string;
    "Level"?: number;
}

export interface CommandExecute {
    "Id"?: number;
    "ComputerId"?: number;
    "Command"?: Command;
    "Status"?: string;
    "Parameters"?: Array<string>;
    "Output"?: string;
    "Fastalk"?: boolean;
    "DateLastInventoried"?: Date;
}

export interface CommandHistory {
    "Id"?: number;
    "ComputerId"?: number;
    "DateExecuted"?: Date;
    "Command"?: string;
    "Status"?: string;
    "Output"?: string;
    "User"?: string;
    "DateFinished"?: Date;
}

export interface CommentPriority {
    "Id"?: number;
    "Name"?: string;
}

export interface Computer {
    "Id"?: string;
    "Location"?: Location;
    "Client"?: Client;
    "Contact"?: Contact;
    "IsFasTalk"?: boolean;
    "IsMaster"?: boolean;
    "IsNetworkProbe"?: boolean;
    "IsHeartbeatEnabled"?: boolean;
    "IsMaintenanceModeEnabled"?: boolean;
    "IsTunnelSupported"?: boolean;
    "IsVirtualMachine"?: boolean;
    "ComputerName"?: string;
    "OperatingSystemName"?: string;
    "OperatingSystemVersion"?: string;
    "DomainName"?: string;
    "RemoteAgentLastInventory"?: Date;
    "UTCOffset"?: number;
    "OpenPortsTCP"?: Array<number>;
    "OpenPortsUDP"?: Array<number>;
    "Comment"?: string;
    "RemoteAgentVersion"?: string;
    "RemoteAgentLastContact"?: Date;
    "DomainNameServers"?: Array<string>;
    "LastInventoryReceived"?: Date;
    "WindowsUpdateDate"?: Date;
    "AntivirusDefinitionDate"?: Date;
    "LastHeartbeat"?: Date;
    "TotalMemory"?: number;
    "FreeMemory"?: number;
    "CpuUsage"?: number;
    "LocalIPAddress"?: string;
    "GatewayIPAddress"?: string;
    "SystemUptime"?: number;
    "SystemUptimeDisplay"?: string;
    "LastStartup"?: Date;
    "MACAddress"?: string;
    "DateAdded"?: Date;
    "UserIdleTime"?: number;
    "LoggedInUsers"?: Array<LoggedInUser>;
    "LastUserName"?: string;
    "Tickets"?: Array<Ticket>;
    "Groups"?: Array<Group>;
    "Bandwidth"?: number;
    "BandwidthDisplay"?: string;
    "AssetDate"?: Date;
    "AssetTag"?: string;
    "WarrantyEndDate"?: Date;
    "Type"?: string;
    "Status"?: string;
    "MasterMode"?: string;
    "VirusScanner"?: VirusScannerDef;
    "FriendlyName"?: string;
    "IsLockedDown"?: boolean;
    "IsSystemAccount"?: boolean;
    "IsRebootNeeded"?: boolean;
    "IsVirtualHost"?: boolean;
    "IsHeartbeatRunning"?: boolean;
    "HasIntelVPRO"?: boolean;
    "HasIntelAMT"?: boolean;
    "HasHPiLO"?: boolean;
    "TempFiles"?: string;
    "SerialNumber"?: string;
    "CpuScore"?: number;
    "D3DScore"?: number;
    "DiskScore"?: number;
    "GraphicsScore"?: number;
    "MemoryScore"?: number;
    "PowerProfiles"?: Array<string>;
    "CurrentPowerProfile"?: string;
    "BiosManufacturer"?: string;
    "BiosFlash"?: string;
    "CommentPriority"?: CommentPriority;
}

export interface ComputerAlert {
    "Id"?: number;
    "ComputerId"?: number;
    "Monitor"?: ComputerMonitor;
    "Severity"?: ComputerAlert.SeverityEnum;
    "Message"?: string;
    "AlertDate"?: Date;
    "AlertAge"?: string;
}

export namespace ComputerAlert {

export type SeverityEnum = 'Informational' | 'Warning' | 'Error' | 'Critical';
}
export interface ComputerChassis {
    "ComputerId"?: number;
    "Manufacturer"?: string;
    "ProductName"?: string;
    "Version"?: string;
    "SerialNumber"?: string;
    "UUID"?: string;
    "SkuNumber"?: string;
    "Family"?: string;
    "ChassisType"?: string;
    "ChassisLock"?: boolean;
    "AssetTag"?: string;
    "HeightUnits"?: number;
    "SystemBootState"?: number;
    "PowerSupplyBootState"?: number;
    "ThermalBootState"?: number;
    "MainBoardProduct"?: string;
    "MainBoardSerialNumber"?: string;
    "MainBoardVersion"?: string;
    "MainBoardManufacturer"?: string;
    "LastUpdate"?: Date;
}

export interface ComputerDevice {
    "ComputerId"?: number;
    "PnpDeviceId"?: string;
    "DeviceName"?: string;
    "DeviceType"?: string;
    "DriverVersion"?: string;
    "DriverDate"?: Date;
    "DriverName"?: string;
    "DriverFile"?: string;
    "Manufacturer"?: string;
    "UpdateDate"?: Date;
}

export interface ComputerDrive {
    "DriveId"?: number;
    "ComputerId"?: number;
    "Letter"?: string;
    "Size"?: number;
    "FreeSpace"?: number;
    "FileSystem"?: string;
    "Model"?: string;
    "SmartStatus"?: string;
    "IsMissing"?: boolean;
    "DateLastInventoried"?: Date;
    "VolumeName"?: string;
    "BackupFlag"?: number;
    "IsSolidState"?: boolean;
    "IsInternal"?: boolean;
    "MaximumHistoryDaysAvailable"?: number;
}

export interface ComputerMemorySlot {
    "SlotHandle"?: number;
    "ComputerId"?: number;
    "SlotName"?: string;
    "Bank"?: string;
    "FormFactor"?: MemoryFormFactor;
    "TotalWidth"?: number;
    "DataWidth"?: number;
    "Size"?: number;
    "Type"?: MemoryType;
    "Speed"?: number;
    "Manufacturer"?: string;
    "SerialNumber"?: string;
    "PartNumber"?: string;
    "AssetTag"?: string;
    "UpdateDate"?: Date;
}

export interface ComputerMenu {
    "MenuID"?: string;
    "Name"?: string;
    "Description"?: string;
    "Text"?: string;
    "ImageURL"?: string;
    "RootOnly"?: number;
    "Action"?: string;
    "MsgTitle"?: string;
    "MsgBody"?: string;
    "MsgHeight"?: number;
    "MsgWidth"?: number;
    "URLorEXE"?: string;
    "ScriptID"?: number;
    "Parameters"?: string;
}

export interface ComputerMonitor {
    "MonitorId"?: number;
    "ComputerId"?: number;
    "DeviceId"?: number;
    "Name"?: string;
    "State"?: string;
    "LastScanned"?: Date;
    "LastFailed"?: Date;
    "LastInventoryDate"?: Date;
    "AlertAction"?: AlertAction;
    "MonitorHistory"?: ComputerMonitorHistory;
}

export interface ComputerMonitorHistory {
    "Id"?: number;
    "FailureRate"?: number;
    "LastSuccessData"?: string;
    "LastWarningData"?: string;
    "LastFailData"?: string;
}

export interface ComputerPatchingStats {
    "ComputerId"?: number;
    "OverallCompliance"?: number;
    "ThirtyDayCompliance"?: number;
    "SixtyDayCompliance"?: number;
    "NinetyDayCompliance"?: number;
    "InstalledPatchCount"?: number;
    "MissingPatchCount"?: number;
    "FailedPatchCount"?: number;
    "Stage"?: string;
    "NoPatchInventory"?: boolean;
    "WSUSEnabled"?: boolean;
    "PatchJobRunning"?: boolean;
    "DaytimePatchingEnabled"?: boolean;
    "WUAOutOfDate"?: boolean;
    "MissingBaselinePatches"?: boolean;
    "WUAVersion"?: string;
    "LastPatchedDate"?: Date;
}

export interface ComputerPermissions {
    "EditConfig"?: boolean;
    "EditInfo"?: boolean;
    "SendCommands"?: boolean;
    "AllowRemoteControl"?: boolean;
    "AllowRedir"?: boolean;
    "AllowFileExplorer"?: boolean;
    "AllowRegistryEdit"?: boolean;
    "CommandPrompt"?: boolean;
    "SniffNetwork"?: boolean;
    "Install"?: boolean;
    "History"?: boolean;
    "ViewCommands"?: boolean;
    "MonitorDelete"?: boolean;
    "MonitorAdd"?: boolean;
    "MonitorEdit"?: boolean;
    "ClearAlerts"?: boolean;
    "ScheduleScripts"?: boolean;
    "DeleteScheduleScripts"?: boolean;
}

export interface ComputerProcessor {
    "ComputerId"?: number;
    "ProcessorHandle"?: number;
    "Socket"?: ProcessorSocket;
    "IsEnabled"?: boolean;
    "Family"?: ProcessorFamily;
    "Manufacturer"?: string;
    "Speed"?: number;
    "CacheList"?: Array<ComputerProcessorCache>;
    "SerialNumber"?: string;
    "PartNumber"?: string;
    "Cores"?: number;
    "Threads"?: number;
    "Is64Bit"?: boolean;
    "DEP"?: boolean;
    "IsVirtualized"?: boolean;
    "HasPowerControl"?: boolean;
    "HasHardwareThread"?: boolean;
    "ProcessorName"?: string;
    "UpdateDate"?: Date;
}

export interface ComputerProcessorCache {
    "Id"?: number;
    "Name"?: string;
    "Size"?: number;
}

export interface ComputerScriptHistory {
    "Id"?: number;
    "ScriptId"?: number;
    "ComputerId"?: number;
    "Name"?: string;
    "User"?: string;
    "Status"?: ComputerScriptHistory.StatusEnum;
    "State"?: ComputerScriptHistory.StateEnum;
    "HistoryDate"?: Date;
    "DiagnosticMessage"?: string;
}

export namespace ComputerScriptHistory {

export type StatusEnum = 'Running' | 'Completed';

export type StateEnum = 'Failure' | 'Information' | 'Success';
}
export interface ComputerService {
    "ComputerServiceId"?: number;
    "ComputerId"?: number;
    "Name"?: string;
    "Description"?: string;
    "State"?: string;
    "Startup"?: string;
    "PathName"?: string;
    "ServiceType"?: string;
    "Username"?: string;
    "DateLastInventoried"?: Date;
    "RunLevels"?: string;
}

export interface ComputerSoftware {
    "ApplicationId"?: number;
    "ComputerId"?: number;
    "Name"?: string;
    "InstallationPath"?: string;
    "DateInstalled"?: Date;
    "Size"?: number;
    "UninstallerPath"?: string;
    "Version"?: string;
    "Classification"?: SoftwareClassification;
    "DateLastInventoried"?: Date;
}

export interface ComputerVideoCard {
    "ComputerId"?: number;
    "PnpDeviceId"?: string;
    "VideoProcessor"?: string;
    "Mode"?: string;
    "Memory"?: string;
    "Architecture"?: VideoCardArchitecture;
    "MemoryType"?: VideoCardMemory;
    "DACAdapter"?: string;
    "BitsPerPixel"?: number;
    "UpdateDate"?: Date;
}

export interface Contact {
    "Id"?: string;
    "Location"?: Location;
    "Client"?: Client;
    "FirstName"?: string;
    "LastName"?: string;
    "Address1"?: string;
    "Address2"?: string;
    "City"?: string;
    "State"?: string;
    "ZipCode"?: string;
    "PhoneNumber"?: string;
    "MobileNumber"?: string;
    "FaxNumber"?: string;
    "PagerNumber"?: string;
    "Email"?: string;
    "ExternalId"?: string;
    "WebPermissions"?: ContactWebPermissions;
    "CreatedDate"?: Date;
    "AssociatedComputers"?: Array<Computer>;
}

export interface ContactWebPermissions {
    "Tickets"?: boolean;
    "RemoteAccess"?: boolean;
    "InstallAgent"?: boolean;
    "Reboot"?: boolean;
    "Shutdown"?: boolean;
    "WakeOnLAN"?: boolean;
}

export interface DataView {
    "Id"?: string;
    "Name"?: string;
    "FolderId"?: number;
}

export interface DataViewFolder {
    "Id"?: string;
    "Name"?: string;
}

export interface DriveStatistics {
    "DriveId"?: number;
    "PercentageUsedDifference"?: number;
}

export interface Group {
    "Id"?: string;
    "ParentId"?: string;
    "SubGroups"?: Array<number>;
    "ParentGroups"?: Array<number>;
    "Parents"?: Array<GroupPartial>;
    "Depth"?: number;
    "Name"?: string;
    "FullName"?: string;
    "TypeId"?: number;
    "TypeName"?: string;
    "TemplatePriority"?: number;
    "GUID"?: string;
    "ComputersAutoJoinSearch"?: Search;
    "NetworkDevicesAutoJoinSearch"?: Search;
    "ContactsAutoJoinSearch"?: Search;
    "MaintenanceWindow"?: MaintenanceWindow;
    "MaintenanceWindowLastApplied"?: Date;
    "ComputersLimitToSearch"?: boolean;
    "NetworkDevicesLimitToSearch"?: boolean;
    "ContactsLimitToSearch"?: boolean;
    "ContactsJoinComputers"?: boolean;
    "RemoteAgentTemplate"?: RemoteAgentTemplate;
    "ClientToSync"?: Client;
    "LocationToSync"?: Location;
    "Comments"?: string;
    "ComputerPermissions"?: Array<UserClassComputerPermissions>;
    "Computers"?: Array<Computer>;
    "NetworkDevices"?: Array<NetworkDevice>;
    "Contacts"?: Array<Contact>;
}

export interface GroupPartial {
    "ID"?: number;
    "ParentId"?: number;
    "Name"?: string;
}

export interface KeyValuePairStringString {
    "Key"?: string;
    "Value"?: string;
}

export interface Link {
    "Id"?: string;
    "Name"?: string;
    "URL"?: string;
    "Category"?: string;
}

export interface Location {
    "Id"?: number;
    "Client"?: Client;
    "Name"?: string;
    "Address1"?: string;
    "Address2"?: string;
    "City"?: string;
    "State"?: string;
    "ZipCode"?: string;
    "Country"?: string;
    "PhoneNumber"?: string;
    "FaxNumber"?: string;
    "Contact"?: Contact;
    "Comments"?: string;
}

export interface LoggedInUser {
    "LoggedInUserName"?: string;
    "ConsoleId"?: number;
}

export interface MaintenanceMode {
    "ComputerID"?: number;
    "TimeStart"?: Date;
    "Duration"?: number;
    "Mode"?: number;
    "UserID"?: number;
}

export interface MaintenanceWindow {
    "Id"?: string;
}

export interface MemoryFormFactor {
    "Id"?: number;
    "Name"?: string;
}

export interface MemoryType {
    "Id"?: number;
    "Name"?: string;
}

export interface NetworkDevice {
    "Id"?: string;
    "Location"?: Location;
    "LocalIPAddress"?: string;
    "Name"?: string;
    "OpenPortsTCP"?: Array<number>;
    "DeviceTypeId"?: number;
    "DeviceTypeName"?: string;
    "LastUpdated"?: Date;
    "MACAddress"?: string;
    "Status"?: string;
    "Contact"?: Contact;
    "AlertAction"?: AlertAction;
    "AlertMessage"?: string;
    "AlertWhenOffline"?: boolean;
    "DateAdded"?: Date;
    "SNMPCommunityGet"?: string;
    "SNMPCommunitySet"?: string;
    "IsSNMPv1Supported"?: boolean;
    "IsSNMPv2cSupported"?: boolean;
    "IsSNMPv3Supported"?: boolean;
    "IsLowOnToner"?: boolean;
    "IsLowOnPaper"?: boolean;
    "IsHighBandwidth"?: boolean;
    "FlagsDisplay"?: string;
    "ManufacturerName"?: string;
    "ModelName"?: string;
    "Description"?: string;
    "Uptime"?: number;
    "UptimeDisplay"?: string;
    "DataOut"?: number;
    "DataOutDisplay"?: string;
    "DataIn"?: number;
    "DataInDisplay"?: string;
    "AssetDate"?: Date;
    "LastContact"?: Date;
    "NasPercent"?: string;
    "Groups"?: Array<Group>;
    "Client"?: Client;
}

export interface PatchInformation {
    "WebServerPatchVersion"?: string;
    "DBAgentServerPatchVersion"?: string;
    "ControlCenterPatchVersion"?: string;
    "RemoteAgentPatchVersion"?: string;
}

export interface PatchOperation {
    "Op"?: string;
    "Path"?: string;
    "Value"?: any;
}

export interface ProcessorFamily {
    "Id"?: number;
    "Name"?: string;
}

export interface ProcessorSocket {
    "Id"?: number;
    "Name"?: string;
}

export interface QueryOptionExpand {
    "FieldName"?: string;
    "Page"?: number;
    "PageSize"?: number;
    "Condition"?: string;
    "Expands"?: { [key: string]: QueryOptionExpand; };
    "OrderBy"?: QueryOptionOrderBy;
    "IncludedFields"?: Array<string>;
    "ExcludedFields"?: Array<string>;
}

export interface QueryOptionOrderBy {
    "Name"?: string;
    "Type"?: QueryOptionOrderBy.TypeEnum;
}

export namespace QueryOptionOrderBy {

export type TypeEnum = 'Undefined' | 'Ascending' | 'Descending';
}
export interface QueryOptions {
    "OrderBy"?: QueryOptionOrderBy;
    "Page"?: number;
    "PageSize"?: number;
    "Condition"?: string;
    "Expands"?: { [key: string]: QueryOptionExpand; };
    "IncludedFields"?: Array<string>;
    "ExcludedFields"?: Array<string>;
    "Ids"?: Array<string>;
    "Timeout"?: number;
}

export interface RemoteAgentSchedule {
    "Id"?: string;
    "Name"?: string;
    "UpdateConfig"?: Schedule;
    "HardwareInventory"?: Schedule;
    "SystemInventory"?: Schedule;
    "DriveInventory"?: Schedule;
    "ProcessInventory"?: Schedule;
    "MalewareInventory"?: Schedule;
    "SoftwareInventory"?: Schedule;
    "EventInventory"?: Schedule;
    "PrinterInventory"?: Schedule;
    "NetworkInventory"?: Schedule;
    "NetworkAnalysis"?: Schedule;
    "HotfixInventory"?: Schedule;
    "ServiceInventory"?: Schedule;
    "NetworkProbeInventory"?: Schedule;
    "LastUpdate"?: Date;
    "LastUser"?: string;
}

export interface RemoteAgentTemplate {
    "Id"?: string;
    "Name"?: string;
    "TemplateGUID"?: string;
    "ServerAddress"?: string;
    "EventLogInventoryMode"?: RemoteAgentTemplate.EventLogInventoryModeEnum;
    "WindowsUpdate"?: RemoteAgentTemplate.WindowsUpdateEnum;
    "SSLAcceptExpiredCertificates"?: boolean;
    "SSLAccessUntrustedCertificateAuthorities"?: boolean;
    "SSLAcceptMismatchedNames"?: boolean;
    "SSLAcceptRevokedCertificates"?: boolean;
    "SSLAcceptAll"?: boolean;
    "DefaultLanguagePack"?: string;
    "HeartbeatEnabled"?: boolean;
    "HeartbeatFrequency"?: number;
    "RemoteAgentLogDebug"?: boolean;
    "Schedule"?: RemoteAgentSchedule;
    "AgentUpdateWindow"?: Schedule;
    "TempDirectory"?: string;
    "CacheDirectory"?: string;
    "CacheUsername"?: string;
    "CachePassword"?: string;
    "CachePatch"?: boolean;
    "CacheSoftware"?: boolean;
    "CacheUpdate"?: boolean;
    "TrayTitle"?: string;
    "RemoteAgentName"?: string;
    "ShowTray"?: boolean;
    "TrayDisablePoweredBy"?: boolean;
    "TrayIcon"?: string;
    "AgentRebootMode"?: RemoteAgentTemplate.AgentRebootModeEnum;
    "RemoteAccessMode"?: RemoteAgentTemplate.RemoteAccessModeEnum;
    "FileExplorerAccessMode"?: RemoteAgentTemplate.FileExplorerAccessModeEnum;
    "RegistryEditorAccessMode"?: RemoteAgentTemplate.RegistryEditorAccessModeEnum;
    "ScreenCaptureAccessMode"?: RemoteAgentTemplate.ScreenCaptureAccessModeEnum;
    "DisallowUserCloseTray"?: boolean;
    "AllowUserDisableRemoteAccess"?: boolean;
    "TrayHelpURL"?: string;
    "TrayCustomMenuTitle"?: string;
    "TrayCustomMenuURL"?: string;
    "TrayShowCustomMenu"?: boolean;
    "TrayShowHelp"?: boolean;
    "TrayMenus"?: Array<ComputerMenu>;
    "TrayRebootLogOffNotificationText"?: string;
    "TrayShutdownNotificationText"?: string;
    "TrayRemoteAccessNotificationText"?: string;
    "TrayFileExplorerAccessNotificationText"?: string;
    "TrayRegistryEditorAccessNotificationText"?: string;
    "TrayScreenCaptureAccessNotificationText"?: string;
    "ServiceTicketTitle"?: string;
    "TrayTicketFromLabelText"?: string;
    "TrayTicketSubjectLabelText"?: string;
    "TrayShowServiceTicketMenu"?: boolean;
    "TrayShowMessagesAndTickets"?: boolean;
    "TrayTicketVerifyEmail"?: boolean;
    "SupportURL"?: string;
    "RSSFeedAddress1"?: string;
    "RSSFeedAddress2"?: string;
    "RSSFeedAddress3"?: string;
    "RSSFeedAddress4"?: string;
    "EnableRSS"?: boolean;
    "TrayChatNotificationText"?: string;
    "TrayChatNotificationTitle"?: string;
    "TrayInterruptUserWithChat"?: boolean;
    "ProxyServerURL"?: string;
    "ProxyServerUser"?: string;
    "ProxyServerPassword"?: string;
    "TrayNotificationTitle"?: string;
    "TrayNewMessageNotificationText"?: string;
    "TrayNewRSSFeedNotificationText"?: string;
    "TrayRemoteAccessNotificationTitle"?: string;
    "TraySystemMessageNotificationTitle"?: string;
    "BackupServerURL"?: string;
    "BackupServerUser"?: string;
    "BackupServerPassword"?: string;
    "NetworkAccessStoragePath"?: string;
    "TemplateProperties"?: Array<TemplateProperty>;
    "AntivirusTemplate"?: AVTemplatePolicy;
}

export namespace RemoteAgentTemplate {

export type EventLogInventoryModeEnum = 'InventoryOnlyUsesSchedule' | 'ImmediatelySendErrors' | 'ImmediatelySendErrorsAndWarnings' | 'ImmediatelySendAllButSecurity' | 'ImmediatelySendAll';

export type WindowsUpdateEnum = 'DoNothing' | 'EnableWindowsUpdateDefaults' | 'SetToDownloadOnly' | 'DisableWindowsUpdate' | 'LabtechModeLabtechModeUIAccessDisabled';

export type AgentRebootModeEnum = 'Now' | 'Ask' | 'AskThenAllow' | 'AskThenDeny' | 'Deny';

export type RemoteAccessModeEnum = 'Silent' | 'Ask' | 'AskThenAllow' | 'AskThenDeny' | 'Deny';

export type FileExplorerAccessModeEnum = 'Now' | 'Ask' | 'AskThenAllow' | 'AskThenDeny' | 'Deny';

export type RegistryEditorAccessModeEnum = 'Now' | 'Ask' | 'AskThenAllow' | 'AskThenDeny' | 'Deny';

export type ScreenCaptureAccessModeEnum = 'Now' | 'Ask' | 'AskThenAllow' | 'AskThenDeny' | 'Deny';
}
export interface RetiredAsset {
    "Id"?: string;
    "Client"?: Client;
    "Location"?: Location;
    "ComputerName"?: string;
    "OperatingSystemName"?: string;
    "OperatingSystemVersion"?: string;
    "Comment"?: string;
    "LocalIPAddress"?: string;
    "GatewayIPAddress"?: string;
    "AssetTag"?: string;
    "AssetDate"?: Date;
    "RetiredDate"?: Date;
    "RetireComment"?: string;
    "ComputerId"?: string;
}

export interface Schedule {
    "DayId"?: Schedule.DayIdEnum;
    "DayName"?: string;
    "RepeatEveryHour"?: number;
    "Date"?: Date;
}

export namespace Schedule {

export type DayIdEnum = 'Everyday' | 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
}
export interface ScheduledScript {
    "Id"?: number;
    "ScriptId"?: number;
    "ClientId"?: number;
    "LocationId"?: number;
    "ComputerId"?: number;
    "GroupId"?: number;
    "IncludeSubgroups"?: boolean;
    "SearchId"?: number;
    "Disabled"?: boolean;
    "EffectiveStartDate"?: Date;
    "EffectiveEndDate"?: Date;
    "EffectiveOccurrences"?: number;
    "DistributionWindowType"?: number;
    "DistributionWindowAmount"?: number;
    "NextRun"?: Date;
    "NextSchedule"?: Date;
    "ScheduleType"?: number;
    "ExcludeTimeStart"?: string;
    "ExcludeTimeEnd"?: string;
    "Interval"?: number;
    "ScheduleWeekOfMonth"?: number;
    "ScheduleDayOfWeek"?: number;
    "RepeatType"?: number;
    "RepeatAmount"?: number;
    "RepeatStopAfter"?: number;
    "SkipOffline"?: boolean;
    "OfflineOnly"?: boolean;
    "WakeOffline"?: boolean;
    "WakeScript"?: boolean;
    "DisableTimeZone"?: boolean;
    "RunScriptOnProbe"?: boolean;
    "Parameters"?: string;
    "Priority"?: number;
    "TimeZoneAdd"?: number;
    "User"?: string;
    "LastUpdate"?: Date;
}

export interface Script {
    "Id"?: string;
    "Folder"?: ScriptFolder;
    "Name"?: string;
    "Comments"?: string;
    "IsComputerScript"?: boolean;
    "IsLocationScript"?: boolean;
    "IsMaintenanceScript"?: boolean;
    "IsFunctionScript"?: boolean;
    "IsOffline"?: boolean;
    "IgnoreForMobileDevices"?: boolean;
    "IsPublicSharable"?: boolean;
    "IsUserResponse"?: boolean;
    "IsSystemScript"?: boolean;
    "IsMobileDeviceScript"?: boolean;
    "IsNetworkDeviceScript"?: boolean;
    "IsContactScript"?: boolean;
    "Version"?: number;
    "GUID"?: string;
    "Parameters"?: Array<string>;
    "EditPermission"?: Array<number>;
    "Permission"?: Array<number>;
}

export interface ScriptFolder {
    "Id"?: string;
    "ParentId"?: string;
    "Name"?: string;
    "GUID"?: string;
    "SubFolders"?: Array<ScriptFolder>;
}

export interface Search {
    "Id"?: string;
    "Name"?: string;
    "SearchFolder"?: SearchFolder;
    "IsReadOnly"?: boolean;
    "SearchType"?: Search.SearchTypeEnum;
}

export namespace Search {

export type SearchTypeEnum = 'AdvancedComputers' | 'AdvancedNetDevices' | 'AdvancedContacts' | 'AdvancedMobileDevices';
}
export interface SearchFolder {
    "Id"?: string;
    "Name"?: string;
}

export interface SensorCheck {
    "Id"?: string;
    "Name"?: string;
    "SensorCheckType"?: SensorCheck.SensorCheckTypeEnum;
}

export namespace SensorCheck {

export type SensorCheckTypeEnum = 'SystemAverages' | 'SystemCounts' | 'Trends' | 'PerDayCounts';
}
export interface SoftwareClassification {
    "Id"?: number;
    "Name"?: string;
}

export interface TemplateAvailableProperty {
    "PropertyId"?: string;
    "PropertyName"?: string;
    "PropertyDescription"?: string;
    "PropertyGuid"?: string;
}

export interface TemplateProperty {
    "TemplateID"?: string;
    "PropertyName"?: string;
    "PropertyValue"?: string;
    "PropertyDescription"?: string;
}

export interface Ticket {
    "TicketId"?: number;
    "Client"?: Client;
    "Computer"?: Computer;
    "Status"?: TicketStatus;
    "Subject"?: string;
    "Priority"?: TicketPriority;
    "User"?: User;
    "DueDate"?: Date;
    "StartDate"?: Date;
    "ContactDate"?: Date;
    "UpdateDate"?: Date;
    "From"?: string;
    "CC"?: string;
    "SupportLevel"?: number;
    "Category"?: TicketCategory;
    "Location"?: Location;
    "ExternalId"?: number;
    "MonitorId"?: number;
    "Guid"?: string;
    "Agent"?: ComputerMonitor;
    "NetworkDevice"?: NetworkDevice;
}

export interface TicketCategory {
    "Id"?: number;
    "Name"?: string;
    "ParentCategoryId"?: number;
    "Keywords"?: string;
    "Description"?: string;
    "Image"?: string;
    "IsVisibleInList"?: boolean;
}

export interface TicketPriority {
    "Id"?: number;
    "Name"?: string;
}

export interface TicketStatus {
    "Id"?: number;
    "Name"?: string;
}

export interface TokenCredentials {
    "UserName"?: string;
    "Password"?: string;
}

export interface TokenResult {
    "AccessToken"?: string;
    "TokenType"?: string;
    "ExpirationDate"?: Date;
    "UserId"?: string;
}

export interface User {
    "Id"?: string;
    "Folder"?: UserFolder;
    "Name"?: string;
    "Email"?: string;
    "UseTicketBasedSecurity"?: boolean;
    "TicketLevelId"?: number;
    "TicketLevelName"?: string;
    "CommandLevelId"?: number;
    "CommandLevelName"?: string;
    "LastUpdated"?: Date;
    "ImageId"?: string;
    "StatusId"?: number;
    "StatusName"?: string;
    "StatusMessage"?: string;
    "Groups"?: Array<Group>;
    "PrimaryClients"?: Array<string>;
    "UserClasses"?: Array<UserClass>;
    "Flags"?: number;
}

export interface UserAudit {
    "Id"?: string;
    "User"?: User;
    "Message"?: string;
    "DateCreated"?: Date;
    "ExternalId"?: string;
    "AuditAction"?: AuditAction;
}

export interface UserAvatar {
    "Id"?: string;
    "Description"?: string;
    "Name"?: string;
    "FileData"?: string;
    "MD5String"?: string;
    "UserId"?: string;
    "Guid"?: string;
}

export interface UserClass {
    "Id"?: string;
    "Name"?: string;
    "Permissions"?: UserPermissions;
}

export interface UserClassComputerPermissions {
    "Id"?: string;
    "UserClass"?: UserClass;
    "Permissions"?: ComputerPermissions;
}

export interface UserFavorite {
    "Id"?: number;
    "UserId"?: number;
    "AdditionalIdentifier"?: string;
    "Order"?: number;
    "ItemGUID"?: string;
}

export interface UserFolder {
    "Id"?: string;
    "Name"?: string;
}

export interface UserPermissions {
    "SuperAdmin"?: boolean;
    "SystemConfig"?: boolean;
    "ClassConfig"?: boolean;
    "CreateTickets"?: boolean;
    "SharedLinks"?: boolean;
    "TemplateRead"?: boolean;
    "TemplateEdit"?: boolean;
    "TemplateDelete"?: boolean;
    "ClientRead"?: boolean;
    "ClientEdit"?: boolean;
    "ClientDelete"?: boolean;
    "ReportRead"?: boolean;
    "ReportEdit"?: boolean;
    "ReportDelete"?: boolean;
    "ContactRead"?: boolean;
    "ContactEdit"?: boolean;
    "ContactDelete"?: boolean;
    "UserRead"?: boolean;
    "UserEdit"?: boolean;
    "UserDelete"?: boolean;
    "ToolRead"?: boolean;
    "ToolEdit"?: boolean;
    "ToolDelete"?: boolean;
    "ScriptRead"?: boolean;
    "ScriptEdit"?: boolean;
    "ScriptDelete"?: boolean;
    "ManageGroups"?: boolean;
    "DashTicketing"?: boolean;
    "DashTime"?: boolean;
    "DashManage"?: boolean;
    "DashTrending"?: boolean;
    "DashOverview"?: boolean;
    "HUDUpdate"?: boolean;
    "HUDShowAll"?: boolean;
    "DataViewUpdate"?: boolean;
    "DataViewDelete"?: boolean;
    "DataViewShowAll"?: boolean;
    "UsersShowAll"?: boolean;
    "UserClassCreate"?: boolean;
    "UserClassUpdate"?: boolean;
    "PatchManagerConfig"?: boolean;
    "ReportsCreate"?: boolean;
    "ProbeTemplateExecute"?: boolean;
    "ScheduledScriptsUpdate"?: boolean;
    "ClientsShowAll"?: boolean;
    "ShowPasswords"?: boolean;
    "LocationsShowAll"?: boolean;
    "ComputersCreate"?: boolean;
    "ComputersUpdate"?: boolean;
    "ComputersDelete"?: boolean;
    "ComputersShowAll"?: boolean;
    "ComputersForceUpdate"?: boolean;
    "NetworkDeviceUpdate"?: boolean;
    "NetworkDeviceDelete"?: boolean;
    "NetworkDeviceShowAll"?: boolean;
    "RetiredAssetsDelete"?: boolean;
    "GroupsCreate"?: boolean;
    "GroupsDelete"?: boolean;
    "GroupsShowAll"?: boolean;
    "GroupsScheduleScript"?: boolean;
    "GroupMonitorsUpdate"?: boolean;
    "GroupInfoUpdate"?: boolean;
    "GroupManagedServices"?: boolean;
    "RemoteMonitorsCreate"?: boolean;
    "RemoteMonitorsDelete"?: boolean;
    "InternalMonitorsCreate"?: boolean;
    "InternalMonitorsUpdate"?: boolean;
    "InternalMonitorsDelete"?: boolean;
    "AlertsUpdate"?: boolean;
    "AlertsDeleteAll"?: boolean;
    "TicketsRead"?: boolean;
    "TicketsUpdate"?: boolean;
    "TicketsDelete"?: boolean;
    "TicketsRequest"?: boolean;
    "SearchesRead"?: boolean;
    "SearchesUpdate"?: boolean;
    "SearchesDelete"?: boolean;
    "PatchManagerRead"?: boolean;
    "PatchManagerUpdate"?: boolean;
    "LanguagePackEditor"?: boolean;
    "ManagedServiceCatalog"?: boolean;
    "NavigationMenuUpdate"?: boolean;
    "RSSFeedRead"?: boolean;
    "RSSFeedUpdate"?: boolean;
    "LinksDelete"?: boolean;
    "PluginManager"?: boolean;
    "SolutionCenter"?: boolean;
    "DatabaseExecute"?: boolean;
    "ServerStatus"?: boolean;
    "ManageAudits"?: boolean;
    "ManageRemoteCommands"?: boolean;
    "ManageServiceLogs"?: boolean;
    "ManageOutdated"?: boolean;
    "ManageOfflineComputers"?: boolean;
    "ManageScheduleClientScripts"?: boolean;
    "DashboardConfig"?: boolean;
    "ConfigApplicationList"?: boolean;
    "ConfigEventBlackList"?: boolean;
    "QuickConnect"?: boolean;
    "PermissionsUpdate"?: boolean;
    "UserClassRead"?: boolean;
    "UserClassDelete"?: boolean;
}

export interface UserSetting {
    "UserId"?: number;
    "Name"?: string;
    "Value"?: string;
}

export interface VideoCardArchitecture {
    "Id"?: number;
    "Name"?: string;
}

export interface VideoCardMemory {
    "Id"?: number;
    "Name"?: string;
}

export interface VirusScannerDef {
    "Id"?: string;
    "Name"?: string;
}

export interface WebExtension {
    "Id"?: number;
    "Guid"?: string;
    "Name"?: string;
    "Author"?: string;
    "Area"?: WebExtensionArea;
    "IsEnabled"?: boolean;
    "Metadata"?: Array<KeyValuePairStringString>;
}

export interface WebExtensionArea {
    "Id"?: number;
    "Screen"?: WebExtensionScreen;
    "Name"?: string;
}

export interface WebExtensionScreen {
    "Id"?: number;
    "Name"?: string;
}


//export namespace  {
    'use strict';

    export class APITokenApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param credentials 
         */
        public aPITokenPost (params: {  credentials: TokenCredentials; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TokenResult> {
            const localVarPath = this.basePath + '/api/v1/APIToken';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'credentials' is set
            if (params.credentials == null) {
                throw new Error('Missing required parameter credentials when calling aPITokenPost');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.credentials),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param tokenText 
         */
        public aPITokenPost_1 (params: {  tokenText: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TokenResult> {
            const localVarPath = this.basePath + '/api/v1/APIToken/Refresh';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'tokenText' is set
            if (params.tokenText == null) {
                throw new Error('Missing required parameter tokenText when calling aPITokenPost_1');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.tokenText),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class AVTemplatePoliciesApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public aVTemplatePoliciesDeleteAntivirusTemplatePolicy (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicies/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling aVTemplatePoliciesDeleteAntivirusTemplatePolicy');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public aVTemplatePoliciesGetAntivirusTemplatePolicy (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AVTemplatePolicy> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicies/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling aVTemplatePoliciesGetAntivirusTemplatePolicy');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public aVTemplatePoliciesGetAntivirusTemplatePolicyList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicies';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public aVTemplatePoliciesPatchAntivirusTemplatePolicy (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AVTemplatePolicy> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicies/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling aVTemplatePoliciesPatchAntivirusTemplatePolicy');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling aVTemplatePoliciesPatchAntivirusTemplatePolicy');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public aVTemplatePoliciesPostAntivirusTemplatePolicy (params: {  value: AVTemplatePolicy; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AVTemplatePolicy> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicies';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling aVTemplatePoliciesPostAntivirusTemplatePolicy');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public aVTemplatePoliciesPutAntivirusTemplatePolicy (params: {  entityId: string; value: AVTemplatePolicy; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AVTemplatePolicy> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicies/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling aVTemplatePoliciesPutAntivirusTemplatePolicy');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling aVTemplatePoliciesPutAntivirusTemplatePolicy');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class AVTemplatePolicyDataApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public aVTemplatePolicyDataDeleteAntivirusTemplatePolicyData (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicyData/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling aVTemplatePolicyDataDeleteAntivirusTemplatePolicyData');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public aVTemplatePolicyDataGetAntivirusTemplatePolicyData (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AVTemplatePolicyData> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicyData/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling aVTemplatePolicyDataGetAntivirusTemplatePolicyData');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public aVTemplatePolicyDataGetAntivirusTemplatePolicyDataList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicyData';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public aVTemplatePolicyDataPatchAntivirusTemplatePolicyData (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AVTemplatePolicyData> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicyData/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling aVTemplatePolicyDataPatchAntivirusTemplatePolicyData');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling aVTemplatePolicyDataPatchAntivirusTemplatePolicyData');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public aVTemplatePolicyDataPostAntivirusTemplatePolicyData (params: {  value: AVTemplatePolicyData; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AVTemplatePolicyData> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicyData';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling aVTemplatePolicyDataPostAntivirusTemplatePolicyData');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public aVTemplatePolicyDataPutAntivirusTemplatePolicyData (params: {  entityId: string; value: AVTemplatePolicyData; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<AVTemplatePolicyData> {
            const localVarPath = this.basePath + '/api/v1/AVTemplatePolicyData/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling aVTemplatePolicyDataPutAntivirusTemplatePolicyData');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling aVTemplatePolicyDataPutAntivirusTemplatePolicyData');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ChassisApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         * @param computerId 
         */
        public chassisDeleteComputerChassis (params: {  entityId: string; computerId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Chassis/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId))
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling chassisDeleteComputerChassis');
            }
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling chassisDeleteComputerChassis');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public chassisGetComputerChassis (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ComputerChassis> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Chassis'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling chassisGetComputerChassis');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public chassisGetComputerChassis_1 (params: {  computerId: number; entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Chassis/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling chassisGetComputerChassis_1');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling chassisGetComputerChassis_1');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         * @param computerId 
         */
        public chassisPatchComputerChassis (params: {  entityId: string; operations: Array<PatchOperation>; computerId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Chassis/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId))
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling chassisPatchComputerChassis');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling chassisPatchComputerChassis');
            }
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling chassisPatchComputerChassis');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         * @param computerId 
         * @param entityId 
         */
        public chassisPostComputerChassis (params: {  value: ComputerChassis; computerId: string; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Chassis/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling chassisPostComputerChassis');
            }
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling chassisPostComputerChassis');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling chassisPostComputerChassis');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         * @param computerId 
         */
        public chassisPutComputerChassis (params: {  entityId: string; value: ComputerChassis; computerId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Chassis/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId))
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling chassisPutComputerChassis');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling chassisPutComputerChassis');
            }
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling chassisPutComputerChassis');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ClientsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param clientId 
         */
        public clientsDeleteClient (params: {  clientId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Clients/{clientId}'
                .replace('{' + 'clientId' + '}', String(params.clientId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'clientId' is set
            if (params.clientId == null) {
                throw new Error('Missing required parameter clientId when calling clientsDeleteClient');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param clientId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public clientsGetClient (params: {  clientId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Client> {
            const localVarPath = this.basePath + '/api/v1/Clients/{clientId}'
                .replace('{' + 'clientId' + '}', String(params.clientId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'clientId' is set
            if (params.clientId == null) {
                throw new Error('Missing required parameter clientId when calling clientsGetClient');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public clientsGetClientList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Clients';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param clientId 
         * @param operations 
         */
        public clientsPatchClient (params: {  clientId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Client> {
            const localVarPath = this.basePath + '/api/v1/Clients/{clientId}'
                .replace('{' + 'clientId' + '}', String(params.clientId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'clientId' is set
            if (params.clientId == null) {
                throw new Error('Missing required parameter clientId when calling clientsPatchClient');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling clientsPatchClient');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public clientsPostClient (params: {  value: Client; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Client> {
            const localVarPath = this.basePath + '/api/v1/Clients';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling clientsPostClient');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param clientId 
         * @param value 
         */
        public clientsPutClient (params: {  clientId: number; value: Client; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Client> {
            const localVarPath = this.basePath + '/api/v1/Clients/{clientId}'
                .replace('{' + 'clientId' + '}', String(params.clientId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'clientId' is set
            if (params.clientId == null) {
                throw new Error('Missing required parameter clientId when calling clientsPutClient');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling clientsPutClient');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CommandExecuteApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         */
        public commandExecuteDeleteCommandExecute (params: {  computerId: number; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandExecute/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandExecuteDeleteCommandExecute');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandExecuteDeleteCommandExecute');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public commandExecuteGetCommandExecute (params: {  computerId: number; entityId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CommandExecute> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandExecute/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandExecuteGetCommandExecute');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandExecuteGetCommandExecute');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public commandExecuteGetCommandExecuteList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandExecute'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandExecuteGetCommandExecuteList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param operations 
         */
        public commandExecutePatchCommandExecute (params: {  computerId: number; entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandExecute/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandExecutePatchCommandExecute');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandExecutePatchCommandExecute');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling commandExecutePatchCommandExecute');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public commandExecutePostCommandExecute (params: {  computerId: number; value: CommandExecute; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CommandExecute> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandExecute'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandExecutePostCommandExecute');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling commandExecutePostCommandExecute');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param value 
         */
        public commandExecutePutCommandExecute (params: {  computerId: number; entityId: string; value: CommandExecute; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandExecute/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandExecutePutCommandExecute');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandExecutePutCommandExecute');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling commandExecutePutCommandExecute');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CommandHistoryApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         */
        public commandHistoryDeleteCommandHistory (params: {  computerId: number; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandHistory/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandHistoryDeleteCommandHistory');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandHistoryDeleteCommandHistory');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public commandHistoryGetCommandHistory (params: {  computerId: number; entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<CommandHistory> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandHistory/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandHistoryGetCommandHistory');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandHistoryGetCommandHistory');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public commandHistoryGetCommandHistoryList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandHistory'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandHistoryGetCommandHistoryList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param operations 
         */
        public commandHistoryPatchCommandHistory (params: {  computerId: number; entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandHistory/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandHistoryPatchCommandHistory');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandHistoryPatchCommandHistory');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling commandHistoryPatchCommandHistory');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public commandHistoryPostCommandHistory (params: {  computerId: number; value: CommandHistory; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandHistory'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandHistoryPostCommandHistory');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling commandHistoryPostCommandHistory');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param value 
         */
        public commandHistoryPutCommandHistory (params: {  computerId: number; entityId: string; value: CommandHistory; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/CommandHistory/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling commandHistoryPutCommandHistory');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandHistoryPutCommandHistory');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling commandHistoryPutCommandHistory');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class CommandsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public commandsDeleteCommand (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Commands/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandsDeleteCommand');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public commandsGetCommand (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Command> {
            const localVarPath = this.basePath + '/api/v1/Commands/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandsGetCommand');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public commandsGetCommandList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Command>> {
            const localVarPath = this.basePath + '/api/v1/Commands';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public commandsPatchCommand (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Command> {
            const localVarPath = this.basePath + '/api/v1/Commands/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandsPatchCommand');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling commandsPatchCommand');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public commandsPostCommand (params: {  value: Command; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Commands';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling commandsPostCommand');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public commandsPutCommand (params: {  entityId: string; value: Command; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Commands/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling commandsPutCommand');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling commandsPutCommand');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ComputerAlertsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         */
        public computerAlertsDeleteComputerAlerts (params: {  computerId: number; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Alerts/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerAlertsDeleteComputerAlerts');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerAlertsDeleteComputerAlerts');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computerAlertsGetComputerAlerts (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Alerts'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerAlertsGetComputerAlerts');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param operations 
         */
        public computerAlertsPatchComputerAlerts (params: {  computerId: number; entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Alerts/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerAlertsPatchComputerAlerts');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerAlertsPatchComputerAlerts');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computerAlertsPatchComputerAlerts');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computerAlertsPostComputerAlerts (params: {  computerId: number; value: ComputerAlert; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Alerts'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerAlertsPostComputerAlerts');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerAlertsPostComputerAlerts');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param value 
         */
        public computerAlertsPutComputerAlerts (params: {  computerId: number; entityId: string; value: ComputerAlert; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Alerts/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerAlertsPutComputerAlerts');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerAlertsPutComputerAlerts');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerAlertsPutComputerAlerts');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ComputerMenusApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public computerMenusDeleteComputerMenu (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/ComputerMenus/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerMenusDeleteComputerMenu');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computerMenusGetComputerMenu (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ComputerMenu> {
            const localVarPath = this.basePath + '/api/v1/ComputerMenus/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerMenusGetComputerMenu');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computerMenusGetComputerMenuList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ComputerMenu>> {
            const localVarPath = this.basePath + '/api/v1/ComputerMenus';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public computerMenusPatchComputerMenu (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ComputerMenu> {
            const localVarPath = this.basePath + '/api/v1/ComputerMenus/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerMenusPatchComputerMenu');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computerMenusPatchComputerMenu');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public computerMenusPostComputerMenu (params: {  value: ComputerMenu; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ComputerMenu> {
            const localVarPath = this.basePath + '/api/v1/ComputerMenus';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerMenusPostComputerMenu');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public computerMenusPutComputerMenu (params: {  entityId: string; value: ComputerMenu; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ComputerMenu> {
            const localVarPath = this.basePath + '/api/v1/ComputerMenus/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerMenusPutComputerMenu');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerMenusPutComputerMenu');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ComputerMonitorsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param computerId 
         * @param monitorId 
         */
        public computerMonitorsDeleteComputerMonitor (params: {  computerId: number; monitorId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/computers/{computerId}/monitors/{monitorId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'monitorId' + '}', String(params.monitorId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerMonitorsDeleteComputerMonitor');
            }
            // verify required parameter 'monitorId' is set
            if (params.monitorId == null) {
                throw new Error('Missing required parameter monitorId when calling computerMonitorsDeleteComputerMonitor');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param monitorId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computerMonitorsGetComputerMonitor (params: {  computerId: number; monitorId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/computers/{computerId}/monitors/{monitorId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'monitorId' + '}', String(params.monitorId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerMonitorsGetComputerMonitor');
            }
            // verify required parameter 'monitorId' is set
            if (params.monitorId == null) {
                throw new Error('Missing required parameter monitorId when calling computerMonitorsGetComputerMonitor');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computerMonitorsGetComputerMonitorsList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Monitors'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerMonitorsGetComputerMonitorsList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param monitorId 
         * @param operation 
         */
        public computerMonitorsPatchComputerMonitor (params: {  computerId: number; monitorId: number; operation: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/computers/{computerId}/monitors/{monitorId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'monitorId' + '}', String(params.monitorId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerMonitorsPatchComputerMonitor');
            }
            // verify required parameter 'monitorId' is set
            if (params.monitorId == null) {
                throw new Error('Missing required parameter monitorId when calling computerMonitorsPatchComputerMonitor');
            }
            // verify required parameter 'operation' is set
            if (params.operation == null) {
                throw new Error('Missing required parameter operation when calling computerMonitorsPatchComputerMonitor');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operation),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computerMonitorsPostComputerMonitor (params: {  computerId: number; value: ComputerMonitor; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/computers/{computerId}/monitors'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerMonitorsPostComputerMonitor');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerMonitorsPostComputerMonitor');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param monitorId 
         * @param value 
         */
        public computerMonitorsPutComputerMonitor (params: {  computerId: number; monitorId: number; value: ComputerMonitor; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/computers/{computerId}/monitors/{monitorId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'monitorId' + '}', String(params.monitorId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerMonitorsPutComputerMonitor');
            }
            // verify required parameter 'monitorId' is set
            if (params.monitorId == null) {
                throw new Error('Missing required parameter monitorId when calling computerMonitorsPutComputerMonitor');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerMonitorsPutComputerMonitor');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ComputerRunningScriptsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         */
        public computerRunningScriptsDeleteComputerRunningScripts (params: {  computerId: number; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/RunningScripts/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerRunningScriptsDeleteComputerRunningScripts');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerRunningScriptsDeleteComputerRunningScripts');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computerRunningScriptsGetComputerRunningScripts (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/RunningScripts'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerRunningScriptsGetComputerRunningScripts');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param operations 
         */
        public computerRunningScriptsPatchComputerRunningScripts (params: {  computerId: number; entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/RunningScripts/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerRunningScriptsPatchComputerRunningScripts');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerRunningScriptsPatchComputerRunningScripts');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computerRunningScriptsPatchComputerRunningScripts');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computerRunningScriptsPostComputerRunningScripts (params: {  computerId: number; value: ComputerScriptHistory; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/RunningScripts'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerRunningScriptsPostComputerRunningScripts');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerRunningScriptsPostComputerRunningScripts');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param value 
         */
        public computerRunningScriptsPutComputerRunningScripts (params: {  computerId: number; entityId: string; value: ComputerScriptHistory; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/RunningScripts/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerRunningScriptsPutComputerRunningScripts');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computerRunningScriptsPutComputerRunningScripts');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerRunningScriptsPutComputerRunningScripts');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ComputerScriptHistoryApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param computerId 
         * @param scriptHistoryId 
         */
        public computerScriptHistoryDeleteComputerScriptHistory (params: {  computerId: number; scriptHistoryId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScriptHistory/{scriptHistoryId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'scriptHistoryId' + '}', String(params.scriptHistoryId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerScriptHistoryDeleteComputerScriptHistory');
            }
            // verify required parameter 'scriptHistoryId' is set
            if (params.scriptHistoryId == null) {
                throw new Error('Missing required parameter scriptHistoryId when calling computerScriptHistoryDeleteComputerScriptHistory');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computerScriptHistoryGetComputerScriptHistoryList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScriptHistory'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerScriptHistoryGetComputerScriptHistoryList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param scriptHistoryId 
         * @param operations 
         */
        public computerScriptHistoryPatchComputerScriptHistory (params: {  computerId: number; scriptHistoryId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScriptHistory/{scriptHistoryId}:int'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'scriptHistoryId' + '}', String(params.scriptHistoryId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerScriptHistoryPatchComputerScriptHistory');
            }
            // verify required parameter 'scriptHistoryId' is set
            if (params.scriptHistoryId == null) {
                throw new Error('Missing required parameter scriptHistoryId when calling computerScriptHistoryPatchComputerScriptHistory');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computerScriptHistoryPatchComputerScriptHistory');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computerScriptHistoryPostComputerScriptHistory (params: {  computerId: number; value: ComputerScriptHistory; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScriptHistory'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerScriptHistoryPostComputerScriptHistory');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerScriptHistoryPostComputerScriptHistory');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param scriptHistoryId 
         * @param value 
         */
        public computerScriptHistoryPutComputerScriptHistory (params: {  computerId: number; scriptHistoryId: number; value: ComputerScriptHistory; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScriptHistory/{scriptHistoryId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'scriptHistoryId' + '}', String(params.scriptHistoryId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computerScriptHistoryPutComputerScriptHistory');
            }
            // verify required parameter 'scriptHistoryId' is set
            if (params.scriptHistoryId == null) {
                throw new Error('Missing required parameter scriptHistoryId when calling computerScriptHistoryPutComputerScriptHistory');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computerScriptHistoryPutComputerScriptHistory');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ComputersApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param computerId 
         */
        public computersDeleteComputer (params: {  computerId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersDeleteComputer');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param pnpDeviceId 
         */
        public computersDeleteComputerDevice (params: {  computerId: number; pnpDeviceId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Devices/{pnpDeviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'pnpDeviceId' + '}', String(params.pnpDeviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersDeleteComputerDevice');
            }
            // verify required parameter 'pnpDeviceId' is set
            if (params.pnpDeviceId == null) {
                throw new Error('Missing required parameter pnpDeviceId when calling computersDeleteComputerDevice');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param driveId 
         */
        public computersDeleteComputerDrive (params: {  computerId: number; driveId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Drives/{driveId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'driveId' + '}', String(params.driveId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersDeleteComputerDrive');
            }
            // verify required parameter 'driveId' is set
            if (params.driveId == null) {
                throw new Error('Missing required parameter driveId when calling computersDeleteComputerDrive');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         */
        public computersDeleteComputerMaintenanceMode (params: {  computerId: number; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MaintenanceModes/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersDeleteComputerMaintenanceMode');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computersDeleteComputerMaintenanceMode');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param slotHandle 
         */
        public computersDeleteComputerMemorySlot (params: {  computerId: number; slotHandle: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MemorySlots/{slotHandle}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'slotHandle' + '}', String(params.slotHandle));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersDeleteComputerMemorySlot');
            }
            // verify required parameter 'slotHandle' is set
            if (params.slotHandle == null) {
                throw new Error('Missing required parameter slotHandle when calling computersDeleteComputerMemorySlot');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param processorHandle 
         */
        public computersDeleteComputerProcessor (params: {  computerId: number; processorHandle: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Processors/{processorHandle}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'processorHandle' + '}', String(params.processorHandle));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersDeleteComputerProcessor');
            }
            // verify required parameter 'processorHandle' is set
            if (params.processorHandle == null) {
                throw new Error('Missing required parameter processorHandle when calling computersDeleteComputerProcessor');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param serviceId 
         */
        public computersDeleteComputerService (params: {  computerId: number; serviceId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Services/{serviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'serviceId' + '}', String(params.serviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersDeleteComputerService');
            }
            // verify required parameter 'serviceId' is set
            if (params.serviceId == null) {
                throw new Error('Missing required parameter serviceId when calling computersDeleteComputerService');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param applicationId 
         */
        public computersDeleteComputerSoftware (params: {  computerId: number; applicationId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Software/{applicationId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'applicationId' + '}', String(params.applicationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersDeleteComputerSoftware');
            }
            // verify required parameter 'applicationId' is set
            if (params.applicationId == null) {
                throw new Error('Missing required parameter applicationId when calling computersDeleteComputerSoftware');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param pnpDeviceId 
         */
        public computersDeleteComputerVideoCard (params: {  computerId: number; pnpDeviceId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/VideoCards/{pnpDeviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'pnpDeviceId' + '}', String(params.pnpDeviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersDeleteComputerVideoCard');
            }
            // verify required parameter 'pnpDeviceId' is set
            if (params.pnpDeviceId == null) {
                throw new Error('Missing required parameter pnpDeviceId when calling computersDeleteComputerVideoCard');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputer (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Computer> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputer');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param pnpDeviceId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerDevice (params: {  computerId: number; pnpDeviceId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Devices/{pnpDeviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'pnpDeviceId' + '}', String(params.pnpDeviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerDevice');
            }
            // verify required parameter 'pnpDeviceId' is set
            if (params.pnpDeviceId == null) {
                throw new Error('Missing required parameter pnpDeviceId when calling computersGetComputerDevice');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerDeviceList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Devices'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerDeviceList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param driveId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerDrive (params: {  computerId: number; driveId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Drives/{driveId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'driveId' + '}', String(params.driveId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerDrive');
            }
            // verify required parameter 'driveId' is set
            if (params.driveId == null) {
                throw new Error('Missing required parameter driveId when calling computersGetComputerDrive');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerDriveList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Drives'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerDriveList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerMaintenanceMode (params: {  computerId: number; entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MaintenanceModes/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerMaintenanceMode');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computersGetComputerMaintenanceMode');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerMaintenanceModeList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MaintenanceModes'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerMaintenanceModeList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param slotHandle 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerMemorySlot (params: {  computerId: number; slotHandle: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MemorySlots/{slotHandle}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'slotHandle' + '}', String(params.slotHandle));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerMemorySlot');
            }
            // verify required parameter 'slotHandle' is set
            if (params.slotHandle == null) {
                throw new Error('Missing required parameter slotHandle when calling computersGetComputerMemorySlot');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerMemorySlotList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MemorySlots'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerMemorySlotList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param processorHandle 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerProcessor (params: {  computerId: number; processorHandle: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Processors/{processorHandle}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'processorHandle' + '}', String(params.processorHandle));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerProcessor');
            }
            // verify required parameter 'processorHandle' is set
            if (params.processorHandle == null) {
                throw new Error('Missing required parameter processorHandle when calling computersGetComputerProcessor');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerProcessorList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Processors'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerProcessorList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param serviceId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerService (params: {  computerId: number; serviceId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Services/{serviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'serviceId' + '}', String(params.serviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerService');
            }
            // verify required parameter 'serviceId' is set
            if (params.serviceId == null) {
                throw new Error('Missing required parameter serviceId when calling computersGetComputerService');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerServiceList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Services'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerServiceList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param applicationId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerSoftware (params: {  computerId: number; applicationId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Software/{applicationId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'applicationId' + '}', String(params.applicationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerSoftware');
            }
            // verify required parameter 'applicationId' is set
            if (params.applicationId == null) {
                throw new Error('Missing required parameter applicationId when calling computersGetComputerSoftware');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerSoftwareList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Software'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerSoftwareList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param pnpDeviceId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerVideoCard (params: {  computerId: number; pnpDeviceId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/VideoCards/{pnpDeviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'pnpDeviceId' + '}', String(params.pnpDeviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerVideoCard');
            }
            // verify required parameter 'pnpDeviceId' is set
            if (params.pnpDeviceId == null) {
                throw new Error('Missing required parameter pnpDeviceId when calling computersGetComputerVideoCard');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public computersGetComputerVideoCardList (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/VideoCards'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersGetComputerVideoCardList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param operations 
         */
        public computersPatchComputer (params: {  computerId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Computer> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPatchComputer');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computersPatchComputer');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param pnpDeviceId 
         * @param operations 
         */
        public computersPatchComputerDevice (params: {  computerId: number; pnpDeviceId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Devices/{pnpDeviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'pnpDeviceId' + '}', String(params.pnpDeviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPatchComputerDevice');
            }
            // verify required parameter 'pnpDeviceId' is set
            if (params.pnpDeviceId == null) {
                throw new Error('Missing required parameter pnpDeviceId when calling computersPatchComputerDevice');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computersPatchComputerDevice');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param driveId 
         * @param operations 
         */
        public computersPatchComputerDrive (params: {  computerId: number; driveId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Drives/{driveId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'driveId' + '}', String(params.driveId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPatchComputerDrive');
            }
            // verify required parameter 'driveId' is set
            if (params.driveId == null) {
                throw new Error('Missing required parameter driveId when calling computersPatchComputerDrive');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computersPatchComputerDrive');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param operations 
         */
        public computersPatchComputerMaintenanceMode (params: {  computerId: number; entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MaintenanceModes/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPatchComputerMaintenanceMode');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computersPatchComputerMaintenanceMode');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computersPatchComputerMaintenanceMode');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param slotHandle 
         * @param operations 
         */
        public computersPatchComputerMemorySlot (params: {  computerId: number; slotHandle: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ComputerMemorySlot> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MemorySlots/{slotHandle}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'slotHandle' + '}', String(params.slotHandle));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPatchComputerMemorySlot');
            }
            // verify required parameter 'slotHandle' is set
            if (params.slotHandle == null) {
                throw new Error('Missing required parameter slotHandle when calling computersPatchComputerMemorySlot');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computersPatchComputerMemorySlot');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param processorHandle 
         * @param operations 
         */
        public computersPatchComputerProcessor (params: {  computerId: number; processorHandle: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Processors/{processorHandle}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'processorHandle' + '}', String(params.processorHandle));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPatchComputerProcessor');
            }
            // verify required parameter 'processorHandle' is set
            if (params.processorHandle == null) {
                throw new Error('Missing required parameter processorHandle when calling computersPatchComputerProcessor');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computersPatchComputerProcessor');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param serviceId 
         * @param operations 
         */
        public computersPatchComputerService (params: {  computerId: number; serviceId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Services/{serviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'serviceId' + '}', String(params.serviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPatchComputerService');
            }
            // verify required parameter 'serviceId' is set
            if (params.serviceId == null) {
                throw new Error('Missing required parameter serviceId when calling computersPatchComputerService');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computersPatchComputerService');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param applicationId 
         * @param operations 
         */
        public computersPatchComputerSoftware (params: {  computerId: number; applicationId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Software/{applicationId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'applicationId' + '}', String(params.applicationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPatchComputerSoftware');
            }
            // verify required parameter 'applicationId' is set
            if (params.applicationId == null) {
                throw new Error('Missing required parameter applicationId when calling computersPatchComputerSoftware');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computersPatchComputerSoftware');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param pnpDeviceId 
         * @param operations 
         */
        public computersPatchComputerVideoCard (params: {  computerId: number; pnpDeviceId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/VideoCards/{pnpDeviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'pnpDeviceId' + '}', String(params.pnpDeviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPatchComputerVideoCard');
            }
            // verify required parameter 'pnpDeviceId' is set
            if (params.pnpDeviceId == null) {
                throw new Error('Missing required parameter pnpDeviceId when calling computersPatchComputerVideoCard');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling computersPatchComputerVideoCard');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public computersPostComputer (params: {  value: Computer; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPostComputer');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computersPostComputerDevice (params: {  computerId: number; value: ComputerDevice; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Devices'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPostComputerDevice');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPostComputerDevice');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computersPostComputerDrive (params: {  computerId: number; value: ComputerDrive; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Drives'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPostComputerDrive');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPostComputerDrive');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         * @param entityId 
         */
        public computersPostComputerMaintenanceMode (params: {  computerId: number; value: MaintenanceMode; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MaintenanceModes/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPostComputerMaintenanceMode');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPostComputerMaintenanceMode');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computersPostComputerMaintenanceMode');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computersPostComputerMemorySlot (params: {  computerId: number; value: ComputerMemorySlot; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MemorySlots'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPostComputerMemorySlot');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPostComputerMemorySlot');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computersPostComputerProcessor (params: {  computerId: number; value: ComputerProcessor; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Processors'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPostComputerProcessor');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPostComputerProcessor');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computersPostComputerService (params: {  computerId: number; value: ComputerService; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Services'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPostComputerService');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPostComputerService');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computersPostComputerSoftware (params: {  computerId: number; value: ComputerSoftware; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Software'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPostComputerSoftware');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPostComputerSoftware');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public computersPostComputerVideoCard (params: {  computerId: number; value: ComputerVideoCard; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/VideoCards'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPostComputerVideoCard');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPostComputerVideoCard');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param id 
         * @param value 
         * @param computerId 
         */
        public computersPutComputer (params: {  id: string; value: Computer; computerId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'id' is set
            if (params.id == null) {
                throw new Error('Missing required parameter id when calling computersPutComputer');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPutComputer');
            }
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPutComputer');
            }
            if (params.id !== undefined) {
                queryParameters['id'] = params.id;
            }

            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param pnpDeviceId 
         * @param value 
         */
        public computersPutComputerDevice (params: {  computerId: number; pnpDeviceId: string; value: ComputerDevice; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Devices/{pnpDeviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'pnpDeviceId' + '}', String(params.pnpDeviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPutComputerDevice');
            }
            // verify required parameter 'pnpDeviceId' is set
            if (params.pnpDeviceId == null) {
                throw new Error('Missing required parameter pnpDeviceId when calling computersPutComputerDevice');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPutComputerDevice');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param driveId 
         * @param value 
         */
        public computersPutComputerDrive (params: {  computerId: number; driveId: number; value: ComputerDrive; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Drives/{driveId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'driveId' + '}', String(params.driveId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPutComputerDrive');
            }
            // verify required parameter 'driveId' is set
            if (params.driveId == null) {
                throw new Error('Missing required parameter driveId when calling computersPutComputerDrive');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPutComputerDrive');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param value 
         */
        public computersPutComputerMaintenanceMode (params: {  computerId: number; entityId: string; value: MaintenanceMode; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MaintenanceModes/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPutComputerMaintenanceMode');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling computersPutComputerMaintenanceMode');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPutComputerMaintenanceMode');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param slotHandle 
         * @param value 
         */
        public computersPutComputerMemorySlot (params: {  computerId: number; slotHandle: number; value: ComputerMemorySlot; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/MemorySlots/{slotHandle}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'slotHandle' + '}', String(params.slotHandle));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPutComputerMemorySlot');
            }
            // verify required parameter 'slotHandle' is set
            if (params.slotHandle == null) {
                throw new Error('Missing required parameter slotHandle when calling computersPutComputerMemorySlot');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPutComputerMemorySlot');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param processorHandle 
         * @param value 
         */
        public computersPutComputerProcessor (params: {  computerId: number; processorHandle: number; value: ComputerProcessor; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Processors/{processorHandle}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'processorHandle' + '}', String(params.processorHandle));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPutComputerProcessor');
            }
            // verify required parameter 'processorHandle' is set
            if (params.processorHandle == null) {
                throw new Error('Missing required parameter processorHandle when calling computersPutComputerProcessor');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPutComputerProcessor');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param serviceId 
         * @param value 
         */
        public computersPutComputerService (params: {  computerId: number; serviceId: number; value: ComputerService; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Services/{serviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'serviceId' + '}', String(params.serviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPutComputerService');
            }
            // verify required parameter 'serviceId' is set
            if (params.serviceId == null) {
                throw new Error('Missing required parameter serviceId when calling computersPutComputerService');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPutComputerService');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param applicationId 
         * @param value 
         */
        public computersPutComputerSoftware (params: {  computerId: number; applicationId: number; value: ComputerSoftware; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/Software/{applicationId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'applicationId' + '}', String(params.applicationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPutComputerSoftware');
            }
            // verify required parameter 'applicationId' is set
            if (params.applicationId == null) {
                throw new Error('Missing required parameter applicationId when calling computersPutComputerSoftware');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPutComputerSoftware');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param pnpDeviceId 
         * @param value 
         */
        public computersPutComputerVideoCard (params: {  computerId: number; pnpDeviceId: string; value: ComputerVideoCard; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/VideoCards/{pnpDeviceId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'pnpDeviceId' + '}', String(params.pnpDeviceId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling computersPutComputerVideoCard');
            }
            // verify required parameter 'pnpDeviceId' is set
            if (params.pnpDeviceId == null) {
                throw new Error('Missing required parameter pnpDeviceId when calling computersPutComputerVideoCard');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling computersPutComputerVideoCard');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ContactsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public contactsDeleteContact (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Contacts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling contactsDeleteContact');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public contactsGetContact (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/api/v1/Contacts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling contactsGetContact');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public contactsGetContactList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Contacts';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public contactsPatchContact (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/api/v1/Contacts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling contactsPatchContact');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling contactsPatchContact');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public contactsPostContact (params: {  value: Contact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/api/v1/Contacts';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling contactsPostContact');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public contactsPutContact (params: {  entityId: string; value: Contact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/api/v1/Contacts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling contactsPutContact');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling contactsPutContact');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class DataViewFoldersApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public dataViewFoldersDeleteDataViewFolder (params: {  entityId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/DataViewFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling dataViewFoldersDeleteDataViewFolder');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public dataViewFoldersGetDataViewFolder (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<DataViewFolder> {
            const localVarPath = this.basePath + '/api/v1/DataViewFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling dataViewFoldersGetDataViewFolder');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public dataViewFoldersGetDataViewFolderList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<DataViewFolder>> {
            const localVarPath = this.basePath + '/api/v1/DataViewFolders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public dataViewFoldersPostDataViewFolder (params: {  value: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/DataViewFolders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling dataViewFoldersPostDataViewFolder');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public dataViewFoldersPutDataViewFolder (params: {  entityId: number; value: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/DataViewFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling dataViewFoldersPutDataViewFolder');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling dataViewFoldersPutDataViewFolder');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class DataViewsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public dataViewsDeleteDataView (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/DataViews/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling dataViewsDeleteDataView');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public dataViewsGetDataView (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<DataView> {
            const localVarPath = this.basePath + '/api/v1/DataViews/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling dataViewsGetDataView');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public dataViewsGetDataViewList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<DataView>> {
            const localVarPath = this.basePath + '/api/v1/DataViews';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public dataViewsPatchDataView (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<DataView> {
            const localVarPath = this.basePath + '/api/v1/DataViews/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling dataViewsPatchDataView');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling dataViewsPatchDataView');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public dataViewsPostDataView (params: {  value: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/DataViews';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling dataViewsPostDataView');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public dataViewsPutDataView (params: {  entityId: string; value: DataView; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<DataView> {
            const localVarPath = this.basePath + '/api/v1/DataViews/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling dataViewsPutDataView');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling dataViewsPutDataView');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class DatabaseServerTimeApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         */
        public databaseServerTimeDeleteDatabaseServerDateTimeWithUtcOffset (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/DatabaseServerTime';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         */
        public databaseServerTimeGetDatabaseServerDateTimeWithUtcOffset (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Date> {
            const localVarPath = this.basePath + '/api/v1/DatabaseServerTime';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         */
        public databaseServerTimePatchDatabaseServerDateTimeWithUtcOffset (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/DatabaseServerTime';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         */
        public databaseServerTimePostDatabaseServerDateTimeWithUtcOffset (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/DatabaseServerTime';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         */
        public databaseServerTimePutDatabaseServerDateTimeWithUtcOffset (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/DatabaseServerTime';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class GroupsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public groupsDeleteGroup (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Groups/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling groupsDeleteGroup');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public groupsGetGroup (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Group> {
            const localVarPath = this.basePath + '/api/v1/Groups/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling groupsGetGroup');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public groupsGetGroupList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Group>> {
            const localVarPath = this.basePath + '/api/v1/Groups';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public groupsPatchGroup (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Group> {
            const localVarPath = this.basePath + '/api/v1/Groups/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling groupsPatchGroup');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling groupsPatchGroup');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public groupsPostGroup (params: {  value: Group; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Group> {
            const localVarPath = this.basePath + '/api/v1/Groups';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling groupsPostGroup');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public groupsPutGroup (params: {  entityId: string; value: Group; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Group> {
            const localVarPath = this.basePath + '/api/v1/Groups/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling groupsPutGroup');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling groupsPutGroup');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class LinksApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public linksDeleteLink (params: {  entityId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Links/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling linksDeleteLink');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public linksGetLink (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Link> {
            const localVarPath = this.basePath + '/api/v1/Links/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling linksGetLink');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public linksGetLinkList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Link>> {
            const localVarPath = this.basePath + '/api/v1/Links';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public linksPostLink (params: {  value: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Links';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling linksPostLink');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public linksPutLink (params: {  entityId: number; value: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Links/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling linksPutLink');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling linksPutLink');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class LocationsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param locationId 
         */
        public locationsDeleteLocation (params: {  locationId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Locations/{locationId}'
                .replace('{' + 'locationId' + '}', String(params.locationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'locationId' is set
            if (params.locationId == null) {
                throw new Error('Missing required parameter locationId when calling locationsDeleteLocation');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param locationId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public locationsGetLocation (params: {  locationId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Location> {
            const localVarPath = this.basePath + '/api/v1/Locations/{locationId}'
                .replace('{' + 'locationId' + '}', String(params.locationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'locationId' is set
            if (params.locationId == null) {
                throw new Error('Missing required parameter locationId when calling locationsGetLocation');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public locationsGetLocationList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Locations';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param locationId 
         * @param operations 
         */
        public locationsPatchLocation (params: {  locationId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Location> {
            const localVarPath = this.basePath + '/api/v1/Locations/{locationId}'
                .replace('{' + 'locationId' + '}', String(params.locationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'locationId' is set
            if (params.locationId == null) {
                throw new Error('Missing required parameter locationId when calling locationsPatchLocation');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling locationsPatchLocation');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public locationsPostLocation (params: {  value: Location; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Location> {
            const localVarPath = this.basePath + '/api/v1/Locations';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling locationsPostLocation');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param locationId 
         * @param value 
         */
        public locationsPutLocation (params: {  locationId: number; value: Location; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Location> {
            const localVarPath = this.basePath + '/api/v1/Locations/{locationId}'
                .replace('{' + 'locationId' + '}', String(params.locationId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'locationId' is set
            if (params.locationId == null) {
                throw new Error('Missing required parameter locationId when calling locationsPutLocation');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling locationsPutLocation');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class NetworkDevicesApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public networkDevicesDeleteNetworkDevice (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/NetworkDevices/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling networkDevicesDeleteNetworkDevice');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public networkDevicesGetNetworkDevice (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<NetworkDevice> {
            const localVarPath = this.basePath + '/api/v1/NetworkDevices/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling networkDevicesGetNetworkDevice');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public networkDevicesGetNetworkDeviceList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/NetworkDevices';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public networkDevicesPatchNetworkDevice (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<NetworkDevice> {
            const localVarPath = this.basePath + '/api/v1/NetworkDevices/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling networkDevicesPatchNetworkDevice');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling networkDevicesPatchNetworkDevice');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public networkDevicesPostNetworkDevice (params: {  value: NetworkDevice; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<NetworkDevice> {
            const localVarPath = this.basePath + '/api/v1/NetworkDevices';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling networkDevicesPostNetworkDevice');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public networkDevicesPutNetworkDevice (params: {  entityId: string; value: NetworkDevice; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/NetworkDevices/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling networkDevicesPutNetworkDevice');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling networkDevicesPutNetworkDevice');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class PatchInformationApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         */
        public patchInformationDeletePatchInformation (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/PatchInformation';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public patchInformationGetPatchInformation (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<PatchInformation> {
            const localVarPath = this.basePath + '/api/v1/PatchInformation';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param operations 
         */
        public patchInformationPatchPatchInformation (params: {  operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/PatchInformation';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling patchInformationPatchPatchInformation');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public patchInformationPostPatchInformation (params: {  value: PatchInformation; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/PatchInformation';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling patchInformationPostPatchInformation');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public patchInformationPutPatchInformation (params: {  value: PatchInformation; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/PatchInformation';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling patchInformationPutPatchInformation');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class PatchingStatsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         */
        public patchingStatsDeletePatchingStats (params: {  computerId: number; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/PatchingStats/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling patchingStatsDeletePatchingStats');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling patchingStatsDeletePatchingStats');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public patchingStatsGetPatchingStats (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ComputerPatchingStats> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/PatchingStats'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling patchingStatsGetPatchingStats');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param operations 
         */
        public patchingStatsPatchPatchingStats (params: {  computerId: number; entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/PatchingStats/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling patchingStatsPatchPatchingStats');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling patchingStatsPatchPatchingStats');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling patchingStatsPatchPatchingStats');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public patchingStatsPostPatchingStats (params: {  computerId: number; value: ComputerPatchingStats; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/PatchingStats'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling patchingStatsPostPatchingStats');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling patchingStatsPostPatchingStats');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param value 
         */
        public patchingStatsPutPatchingStats (params: {  computerId: number; entityId: string; value: ComputerPatchingStats; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/PatchingStats/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling patchingStatsPutPatchingStats');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling patchingStatsPutPatchingStats');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling patchingStatsPutPatchingStats');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class RemoteAgentSchedulesApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public remoteAgentSchedulesDeleteRemoteAgentSchedule (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentSchedules/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling remoteAgentSchedulesDeleteRemoteAgentSchedule');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public remoteAgentSchedulesGetRemoteAgentSchedule (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<RemoteAgentSchedule> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentSchedules/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling remoteAgentSchedulesGetRemoteAgentSchedule');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public remoteAgentSchedulesGetRemoteAgentScheduleList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<RemoteAgentSchedule>> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentSchedules';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public remoteAgentSchedulesPatchRemoteAgentSchedule (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<RemoteAgentSchedule> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentSchedules/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling remoteAgentSchedulesPatchRemoteAgentSchedule');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling remoteAgentSchedulesPatchRemoteAgentSchedule');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public remoteAgentSchedulesPostRemoteAgentSchedule (params: {  value: RemoteAgentSchedule; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<RemoteAgentSchedule> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentSchedules';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling remoteAgentSchedulesPostRemoteAgentSchedule');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public remoteAgentSchedulesPutRemoteAgentSchedule (params: {  entityId: string; value: RemoteAgentSchedule; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<RemoteAgentSchedule> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentSchedules/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling remoteAgentSchedulesPutRemoteAgentSchedule');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling remoteAgentSchedulesPutRemoteAgentSchedule');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class RemoteAgentTemplatesApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public remoteAgentTemplatesDeleteRemoteAgentTemplate (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentTemplates/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling remoteAgentTemplatesDeleteRemoteAgentTemplate');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public remoteAgentTemplatesGetRemoteAgentTemplate (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<RemoteAgentTemplate> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentTemplates/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling remoteAgentTemplatesGetRemoteAgentTemplate');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public remoteAgentTemplatesGetRemoteAgentTemplateList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<RemoteAgentTemplate>> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentTemplates';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public remoteAgentTemplatesPatchRemoteAgentTemplate (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<RemoteAgentTemplate> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentTemplates/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling remoteAgentTemplatesPatchRemoteAgentTemplate');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling remoteAgentTemplatesPatchRemoteAgentTemplate');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public remoteAgentTemplatesPostRemoteAgentTemplate (params: {  value: RemoteAgentTemplate; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<RemoteAgentTemplate> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentTemplates';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling remoteAgentTemplatesPostRemoteAgentTemplate');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public remoteAgentTemplatesPutRemoteAgentTemplate (params: {  entityId: string; value: RemoteAgentTemplate; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<RemoteAgentTemplate> {
            const localVarPath = this.basePath + '/api/v1/RemoteAgentTemplates/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling remoteAgentTemplatesPutRemoteAgentTemplate');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling remoteAgentTemplatesPutRemoteAgentTemplate');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class RetiredAssetsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public retiredAssetsDeleteRetiredAsset (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/RetiredAssets/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling retiredAssetsDeleteRetiredAsset');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public retiredAssetsGetRetiredAsset (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<RetiredAsset> {
            const localVarPath = this.basePath + '/api/v1/RetiredAssets/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling retiredAssetsGetRetiredAsset');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public retiredAssetsGetRetiredAssetList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<RetiredAsset>> {
            const localVarPath = this.basePath + '/api/v1/RetiredAssets';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public retiredAssetsPatchRetiredAsset (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/RetiredAssets/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling retiredAssetsPatchRetiredAsset');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling retiredAssetsPatchRetiredAsset');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public retiredAssetsPostRetiredAsset (params: {  value: RetiredAsset; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/RetiredAssets';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling retiredAssetsPostRetiredAsset');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public retiredAssetsPutRetiredAsset (params: {  entityId: string; value: RetiredAsset; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/RetiredAssets/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling retiredAssetsPutRetiredAsset');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling retiredAssetsPutRetiredAsset');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ScheduledScriptApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         */
        public scheduledScriptDeleteComputerScheduledScript (params: {  computerId: number; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScheduledScript/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling scheduledScriptDeleteComputerScheduledScript');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scheduledScriptDeleteComputerScheduledScript');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public scheduledScriptGetComputerScheduledScript (params: {  computerId: number; entityId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ScheduledScript> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScheduledScripts/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling scheduledScriptGetComputerScheduledScript');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scheduledScriptGetComputerScheduledScript');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public scheduledScriptGetComputerScheduledScripts (params: {  computerId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScheduledScripts'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling scheduledScriptGetComputerScheduledScripts');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param operations 
         */
        public scheduledScriptPatchComputerScheduledScript (params: {  computerId: number; entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScheduledScript/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling scheduledScriptPatchComputerScheduledScript');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scheduledScriptPatchComputerScheduledScript');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling scheduledScriptPatchComputerScheduledScript');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param value 
         */
        public scheduledScriptPostComputerScheduledScript (params: {  computerId: number; value: ScheduledScript; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ScheduledScript> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScheduledScripts'
                .replace('{' + 'computerId' + '}', String(params.computerId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling scheduledScriptPostComputerScheduledScript');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling scheduledScriptPostComputerScheduledScript');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param computerId 
         * @param entityId 
         * @param value 
         */
        public scheduledScriptPutComputerScheduledScript (params: {  computerId: number; entityId: string; value: ScheduledScript; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/{computerId}/ScheduledScript/{entityId}'
                .replace('{' + 'computerId' + '}', String(params.computerId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'computerId' is set
            if (params.computerId == null) {
                throw new Error('Missing required parameter computerId when calling scheduledScriptPutComputerScheduledScript');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scheduledScriptPutComputerScheduledScript');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling scheduledScriptPutComputerScheduledScript');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ScriptFoldersApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public scriptFoldersDeleteScriptFolder (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/ScriptFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scriptFoldersDeleteScriptFolder');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public scriptFoldersGetScriptFolder (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ScriptFolder> {
            const localVarPath = this.basePath + '/api/v1/ScriptFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scriptFoldersGetScriptFolder');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         */
        public scriptFoldersGetScriptFolderHierarchy (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<ScriptFolder>> {
            const localVarPath = this.basePath + '/api/v1/ScriptFolders/hierarchy';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public scriptFoldersGetScriptFolderList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/ScriptFolders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public scriptFoldersPatchScriptFolder (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ScriptFolder> {
            const localVarPath = this.basePath + '/api/v1/ScriptFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scriptFoldersPatchScriptFolder');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling scriptFoldersPatchScriptFolder');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public scriptFoldersPostScriptFolder (params: {  value: ScriptFolder; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ScriptFolder> {
            const localVarPath = this.basePath + '/api/v1/ScriptFolders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling scriptFoldersPostScriptFolder');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public scriptFoldersPutScriptFolder (params: {  entityId: string; value: ScriptFolder; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<ScriptFolder> {
            const localVarPath = this.basePath + '/api/v1/ScriptFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scriptFoldersPutScriptFolder');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling scriptFoldersPutScriptFolder');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class ScriptsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public scriptsDeleteScript (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Scripts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scriptsDeleteScript');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public scriptsGetScript (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Script> {
            const localVarPath = this.basePath + '/api/v1/Scripts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scriptsGetScript');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public scriptsGetScriptList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Scripts';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public scriptsPatchScript (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Script> {
            const localVarPath = this.basePath + '/api/v1/Scripts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scriptsPatchScript');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling scriptsPatchScript');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public scriptsPostScript (params: {  value: Script; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Script> {
            const localVarPath = this.basePath + '/api/v1/Scripts';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling scriptsPostScript');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public scriptsPutScript (params: {  entityId: string; value: Script; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Script> {
            const localVarPath = this.basePath + '/api/v1/Scripts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling scriptsPutScript');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling scriptsPutScript');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class SearchFoldersApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public searchFoldersDeleteSearchFolder (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/SearchFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling searchFoldersDeleteSearchFolder');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public searchFoldersGetSearchFolder (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SearchFolder> {
            const localVarPath = this.basePath + '/api/v1/SearchFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling searchFoldersGetSearchFolder');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public searchFoldersGetSearchFolderList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<SearchFolder>> {
            const localVarPath = this.basePath + '/api/v1/SearchFolders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public searchFoldersPatchSearchFolder (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SearchFolder> {
            const localVarPath = this.basePath + '/api/v1/SearchFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling searchFoldersPatchSearchFolder');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling searchFoldersPatchSearchFolder');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public searchFoldersPostSearchFolder (params: {  value: SearchFolder; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SearchFolder> {
            const localVarPath = this.basePath + '/api/v1/SearchFolders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling searchFoldersPostSearchFolder');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public searchFoldersPutSearchFolder (params: {  entityId: string; value: SearchFolder; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SearchFolder> {
            const localVarPath = this.basePath + '/api/v1/SearchFolders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling searchFoldersPutSearchFolder');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling searchFoldersPutSearchFolder');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class SearchesApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public searchesDeleteSearch (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Searches/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling searchesDeleteSearch');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public searchesGetSearch (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Search> {
            const localVarPath = this.basePath + '/api/v1/Searches/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling searchesGetSearch');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public searchesGetSearchList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<Search>> {
            const localVarPath = this.basePath + '/api/v1/Searches';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public searchesPatchSearch (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Search> {
            const localVarPath = this.basePath + '/api/v1/Searches/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling searchesPatchSearch');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling searchesPatchSearch');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public searchesPostSearch (params: {  value: Search; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Searches';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling searchesPostSearch');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public searchesPutSearch (params: {  entityId: string; value: Search; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Search> {
            const localVarPath = this.basePath + '/api/v1/Searches/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling searchesPutSearch');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling searchesPutSearch');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class SensorChecksApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public sensorChecksDeleteSensorCheck (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/SensorChecks/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling sensorChecksDeleteSensorCheck');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public sensorChecksGetSensorCheck (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SensorCheck> {
            const localVarPath = this.basePath + '/api/v1/SensorChecks/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling sensorChecksGetSensorCheck');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public sensorChecksGetSensorCheckList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<SensorCheck>> {
            const localVarPath = this.basePath + '/api/v1/SensorChecks';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public sensorChecksPatchSensorCheck (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SensorCheck> {
            const localVarPath = this.basePath + '/api/v1/SensorChecks/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling sensorChecksPatchSensorCheck');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling sensorChecksPatchSensorCheck');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public sensorChecksPostSensorCheck (params: {  value: SensorCheck; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SensorCheck> {
            const localVarPath = this.basePath + '/api/v1/SensorChecks';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling sensorChecksPostSensorCheck');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public sensorChecksPutSensorCheck (params: {  entityId: string; value: SensorCheck; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<SensorCheck> {
            const localVarPath = this.basePath + '/api/v1/SensorChecks/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling sensorChecksPutSensorCheck');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling sensorChecksPutSensorCheck');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class StatisticsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         */
        public statisticsDeleteDriveStatistics (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Statistics/Drives';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param numberOfDays 
         * @param driveId 
         */
        public statisticsGetDriveStatisticsList (params: {  numberOfDays: number; driveId: Array<number>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<DriveStatistics>> {
            const localVarPath = this.basePath + '/api/v1/Statistics/Drives';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'numberOfDays' is set
            if (params.numberOfDays == null) {
                throw new Error('Missing required parameter numberOfDays when calling statisticsGetDriveStatisticsList');
            }
            // verify required parameter 'driveId' is set
            if (params.driveId == null) {
                throw new Error('Missing required parameter driveId when calling statisticsGetDriveStatisticsList');
            }
            if (params.numberOfDays !== undefined) {
                queryParameters['numberOfDays'] = params.numberOfDays;
            }

            if (params.driveId !== undefined) {
                queryParameters['driveId'] = params.driveId;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         */
        public statisticsPatchDriveStatistics (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Computers/Drives';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         */
        public statisticsPostDriveStatistics (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Statistics/Drives';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         */
        public statisticsPutDriveStatistics (params: {  }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Statistics/Drives';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class SystemContactsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public systemContactsDeleteSystemContact (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/SystemContacts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling systemContactsDeleteSystemContact');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public systemContactsGetSystemContact (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/api/v1/SystemContacts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling systemContactsGetSystemContact');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public systemContactsGetSystemContactList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/SystemContacts';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public systemContactsPatchSystemContact (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/api/v1/SystemContacts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling systemContactsPatchSystemContact');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling systemContactsPatchSystemContact');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public systemContactsPostSystemContact (params: {  value: Contact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/api/v1/SystemContacts';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling systemContactsPostSystemContact');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public systemContactsPutSystemContact (params: {  entityId: string; value: Contact; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Contact> {
            const localVarPath = this.basePath + '/api/v1/SystemContacts/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling systemContactsPutSystemContact');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling systemContactsPutSystemContact');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class TemplateAvailablePropertiesApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public templateAvailablePropertiesDeleteTemplateAvailableProperty (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/TemplateAvailableProperties/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling templateAvailablePropertiesDeleteTemplateAvailableProperty');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public templateAvailablePropertiesGetTemplateAvailableProperty (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TemplateAvailableProperty> {
            const localVarPath = this.basePath + '/api/v1/TemplateAvailableProperties/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling templateAvailablePropertiesGetTemplateAvailableProperty');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public templateAvailablePropertiesGetTemplateAvailablePropertyList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<TemplateAvailableProperty>> {
            const localVarPath = this.basePath + '/api/v1/TemplateAvailableProperties';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public templateAvailablePropertiesPatchTemplateAvailableProperty (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TemplateAvailableProperty> {
            const localVarPath = this.basePath + '/api/v1/TemplateAvailableProperties/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling templateAvailablePropertiesPatchTemplateAvailableProperty');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling templateAvailablePropertiesPatchTemplateAvailableProperty');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public templateAvailablePropertiesPostTemplateAvailableProperty (params: {  value: TemplateAvailableProperty; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TemplateAvailableProperty> {
            const localVarPath = this.basePath + '/api/v1/TemplateAvailableProperties';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling templateAvailablePropertiesPostTemplateAvailableProperty');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public templateAvailablePropertiesPutTemplateAvailableProperty (params: {  entityId: string; value: TemplateAvailableProperty; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TemplateAvailableProperty> {
            const localVarPath = this.basePath + '/api/v1/TemplateAvailableProperties/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling templateAvailablePropertiesPutTemplateAvailableProperty');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling templateAvailablePropertiesPutTemplateAvailableProperty');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class TemplatePropertiesApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public templatePropertiesDeleteTemplateProperty (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/TemplateProperties/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling templatePropertiesDeleteTemplateProperty');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public templatePropertiesGetTemplateProperty (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TemplateProperty> {
            const localVarPath = this.basePath + '/api/v1/TemplateProperties/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling templatePropertiesGetTemplateProperty');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public templatePropertiesGetTemplatePropertyList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<TemplateProperty>> {
            const localVarPath = this.basePath + '/api/v1/TemplateProperties';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public templatePropertiesPatchTemplateProperty (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TemplateProperty> {
            const localVarPath = this.basePath + '/api/v1/TemplateProperties/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling templatePropertiesPatchTemplateProperty');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling templatePropertiesPatchTemplateProperty');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public templatePropertiesPostTemplateProperty (params: {  value: TemplateProperty; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TemplateProperty> {
            const localVarPath = this.basePath + '/api/v1/TemplateProperties';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling templatePropertiesPostTemplateProperty');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public templatePropertiesPutTemplateProperty (params: {  entityId: string; value: TemplateProperty; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<TemplateProperty> {
            const localVarPath = this.basePath + '/api/v1/TemplateProperties/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling templatePropertiesPutTemplateProperty');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling templatePropertiesPutTemplateProperty');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class TicketsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param ticketId 
         */
        public ticketsDeleteTicket (params: {  ticketId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Tickets/{ticketId}'
                .replace('{' + 'ticketId' + '}', String(params.ticketId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'ticketId' is set
            if (params.ticketId == null) {
                throw new Error('Missing required parameter ticketId when calling ticketsDeleteTicket');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param ticketId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public ticketsGetTicket (params: {  ticketId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Ticket> {
            const localVarPath = this.basePath + '/api/v1/Tickets/{ticketId}'
                .replace('{' + 'ticketId' + '}', String(params.ticketId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'ticketId' is set
            if (params.ticketId == null) {
                throw new Error('Missing required parameter ticketId when calling ticketsGetTicket');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public ticketsGetTicketList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Tickets';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public ticketsPostTicket (params: {  value: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Tickets';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling ticketsPostTicket');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param ticketId 
         * @param value 
         */
        public ticketsPutTicket (params: {  ticketId: number; value: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Tickets/{ticketId}'
                .replace('{' + 'ticketId' + '}', String(params.ticketId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'ticketId' is set
            if (params.ticketId == null) {
                throw new Error('Missing required parameter ticketId when calling ticketsPutTicket');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling ticketsPutTicket');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class UserAuditsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public userAuditsDeleteUserAudit (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/Audits/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userAuditsDeleteUserAudit');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userAuditsGetUserAudit (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserAudit> {
            const localVarPath = this.basePath + '/api/v1/Users/Audits/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userAuditsGetUserAudit');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userAuditsGetUserAuditList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<UserAudit>> {
            const localVarPath = this.basePath + '/api/v1/UserAudits';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public userAuditsPatchUserAudit (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/Audits/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userAuditsPatchUserAudit');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling userAuditsPatchUserAudit');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public userAuditsPostUserAudit (params: {  value: UserAudit; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserAudit> {
            const localVarPath = this.basePath + '/api/v1/UserAudits';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling userAuditsPostUserAudit');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public userAuditsPutUserAudit (params: {  entityId: string; value: UserAudit; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/Audits/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userAuditsPutUserAudit');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling userAuditsPutUserAudit');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class UserAvatarsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param userId 
         * @param entityId 
         */
        public userAvatarsDeleteUserAvatar (params: {  userId: string; entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/users/{userId}/avatars/{entityId}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userAvatarsDeleteUserAvatar');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userAvatarsDeleteUserAvatar');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userAvatarsGetUserAvatar (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserAvatar> {
            const localVarPath = this.basePath + '/api/v1/Users/Avatars/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userAvatarsGetUserAvatar');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userAvatarsGetUserAvatarList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<UserAvatar>> {
            const localVarPath = this.basePath + '/api/v1/UserAvatars';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userAvatarsGetUserAvatarListByUserId (params: {  userId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<UserAvatar>> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Avatars'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userAvatarsGetUserAvatarListByUserId');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param entityId 
         * @param operations 
         */
        public userAvatarsPatchUserAvatar (params: {  userId: string; entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserAvatar> {
            const localVarPath = this.basePath + '/api/v1/users/{userId}/avatars/{entityId}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userAvatarsPatchUserAvatar');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userAvatarsPatchUserAvatar');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling userAvatarsPatchUserAvatar');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * Posts the UserAvatar
         * This action doesn&#39;t use the PostFilter because the data is passed differently here compared to all of the other POST actions in the API
         * @param userId 
         */
        public userAvatarsPostUserAvatar (params: {  userId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserAvatar> {
            const localVarPath = this.basePath + '/api/v1/users/{userId}/avatars'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userAvatarsPostUserAvatar');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param entityId 
         * @param value 
         */
        public userAvatarsPutUserAvatar (params: {  userId: string; entityId: string; value: UserAvatar; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/users/{userId}/avatars/{entityId}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userAvatarsPutUserAvatar');
            }
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userAvatarsPutUserAvatar');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling userAvatarsPutUserAvatar');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class UserClassesApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public userClassesDeleteUserClass (params: {  entityId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/Classes/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userClassesDeleteUserClass');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userClassesGetUserClass (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserClass> {
            const localVarPath = this.basePath + '/api/v1/Users/Classes/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userClassesGetUserClass');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userClassesGetUserClassList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<UserClass>> {
            const localVarPath = this.basePath + '/api/v1/UserClasses';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public userClassesPostUserClass (params: {  value: UserClass; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/UserClasses';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling userClassesPostUserClass');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public userClassesPutUserClass (params: {  entityId: number; value: UserClass; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/Classes/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userClassesPutUserClass');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling userClassesPutUserClass');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class UserFavoritesApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param userId 
         * @param userFavoriteId 
         */
        public userFavoritesDeleteUserFavorite (params: {  userId: number; userFavoriteId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Favorites/{userFavoriteId}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'userFavoriteId' + '}', String(params.userFavoriteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userFavoritesDeleteUserFavorite');
            }
            // verify required parameter 'userFavoriteId' is set
            if (params.userFavoriteId == null) {
                throw new Error('Missing required parameter userFavoriteId when calling userFavoritesDeleteUserFavorite');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param userFavoriteId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userFavoritesGetUserFavorite (params: {  userId: number; userFavoriteId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Favorites/{userFavoriteId}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'userFavoriteId' + '}', String(params.userFavoriteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userFavoritesGetUserFavorite');
            }
            // verify required parameter 'userFavoriteId' is set
            if (params.userFavoriteId == null) {
                throw new Error('Missing required parameter userFavoriteId when calling userFavoritesGetUserFavorite');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userFavoritesGetUserFavoriteList (params: {  userId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Favorites'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userFavoritesGetUserFavoriteList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param userFavoriteId 
         * @param operations 
         */
        public userFavoritesPatchUserFavorite (params: {  userId: number; userFavoriteId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Favorites/{userFavoriteId}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'userFavoriteId' + '}', String(params.userFavoriteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userFavoritesPatchUserFavorite');
            }
            // verify required parameter 'userFavoriteId' is set
            if (params.userFavoriteId == null) {
                throw new Error('Missing required parameter userFavoriteId when calling userFavoritesPatchUserFavorite');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling userFavoritesPatchUserFavorite');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param userFavorite 
         */
        public userFavoritesPostUserFavorite (params: {  userId: number; userFavorite: UserFavorite; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserFavorite> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Favorites'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userFavoritesPostUserFavorite');
            }
            // verify required parameter 'userFavorite' is set
            if (params.userFavorite == null) {
                throw new Error('Missing required parameter userFavorite when calling userFavoritesPostUserFavorite');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.userFavorite),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param userFavoriteId 
         * @param value 
         */
        public userFavoritesPutUserFavorite (params: {  userId: number; userFavoriteId: number; value: UserFavorite; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Favorites/{userFavoriteId}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'userFavoriteId' + '}', String(params.userFavoriteId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userFavoritesPutUserFavorite');
            }
            // verify required parameter 'userFavoriteId' is set
            if (params.userFavoriteId == null) {
                throw new Error('Missing required parameter userFavoriteId when calling userFavoritesPutUserFavorite');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling userFavoritesPutUserFavorite');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class UserFoldersApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public userFoldersDeleteUserFolder (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/Folders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userFoldersDeleteUserFolder');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userFoldersGetUserFolder (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserFolder> {
            const localVarPath = this.basePath + '/api/v1/Users/Folders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userFoldersGetUserFolder');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userFoldersGetUserFolderList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<UserFolder>> {
            const localVarPath = this.basePath + '/api/v1/UserFolders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public userFoldersPatchUserFolder (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserFolder> {
            const localVarPath = this.basePath + '/api/v1/Users/Folders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userFoldersPatchUserFolder');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling userFoldersPatchUserFolder');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public userFoldersPostUserFolder (params: {  value: UserFolder; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserFolder> {
            const localVarPath = this.basePath + '/api/v1/UserFolders';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling userFoldersPostUserFolder');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public userFoldersPutUserFolder (params: {  entityId: string; value: UserFolder; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserFolder> {
            const localVarPath = this.basePath + '/api/v1/Users/Folders/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling userFoldersPutUserFolder');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling userFoldersPutUserFolder');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class UserSettingsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param userId 
         * @param settingName 
         */
        public userSettingsDeleteUserSetting (params: {  userId: number; settingName: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Settings/{settingName}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'settingName' + '}', String(params.settingName));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userSettingsDeleteUserSetting');
            }
            // verify required parameter 'settingName' is set
            if (params.settingName == null) {
                throw new Error('Missing required parameter settingName when calling userSettingsDeleteUserSetting');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param settingName 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userSettingsGetUserSetting (params: {  userId: number; settingName: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserSetting> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Settings/{settingName}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'settingName' + '}', String(params.settingName));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userSettingsGetUserSetting');
            }
            // verify required parameter 'settingName' is set
            if (params.settingName == null) {
                throw new Error('Missing required parameter settingName when calling userSettingsGetUserSetting');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public userSettingsGetUserSettingList (params: {  userId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Settings'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userSettingsGetUserSettingList');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param settingName 
         * @param operations 
         */
        public userSettingsPatchUserSetting (params: {  userId: number; settingName: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserSetting> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Settings/{settingName}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'settingName' + '}', String(params.settingName));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userSettingsPatchUserSetting');
            }
            // verify required parameter 'settingName' is set
            if (params.settingName == null) {
                throw new Error('Missing required parameter settingName when calling userSettingsPatchUserSetting');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling userSettingsPatchUserSetting');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param setting 
         */
        public userSettingsPostUserSetting (params: {  userId: number; setting: UserSetting; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<UserSetting> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Settings'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userSettingsPostUserSetting');
            }
            // verify required parameter 'setting' is set
            if (params.setting == null) {
                throw new Error('Missing required parameter setting when calling userSettingsPostUserSetting');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.setting),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param settingName 
         * @param setting 
         */
        public userSettingsPutUserSetting (params: {  userId: number; settingName: string; setting: UserSetting; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}/Settings/{settingName}'
                .replace('{' + 'userId' + '}', String(params.userId))
                .replace('{' + 'settingName' + '}', String(params.settingName));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling userSettingsPutUserSetting');
            }
            // verify required parameter 'settingName' is set
            if (params.settingName == null) {
                throw new Error('Missing required parameter settingName when calling userSettingsPutUserSetting');
            }
            // verify required parameter 'setting' is set
            if (params.setting == null) {
                throw new Error('Missing required parameter setting when calling userSettingsPutUserSetting');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.setting),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class UsersApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param userId 
         */
        public usersDeleteUser (params: {  userId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling usersDeleteUser');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public usersGetUser (params: {  userId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<User> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling usersGetUser');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public usersGetUserList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<User>> {
            const localVarPath = this.basePath + '/api/v1/Users';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param operations 
         */
        public usersPatchUser (params: {  userId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<User> {
            const localVarPath = this.basePath + '/api/v1/users/{userId}'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling usersPatchUser');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling usersPatchUser');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public usersPostUser (params: {  value: User; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/Users';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling usersPostUser');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param userId 
         * @param value 
         */
        public usersPutUser (params: {  userId: number; value: User; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<User> {
            const localVarPath = this.basePath + '/api/v1/Users/{userId}'
                .replace('{' + 'userId' + '}', String(params.userId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'userId' is set
            if (params.userId == null) {
                throw new Error('Missing required parameter userId when calling usersPutUser');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling usersPutUser');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class VirusScannerDefsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param entityId 
         */
        public virusScannerDefsDeleteVirusScannerDefinition (params: {  entityId: string; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/VirusScannerDefs/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling virusScannerDefsDeleteVirusScannerDefinition');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public virusScannerDefsGetVirusScannerDefinition (params: {  entityId: string; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<VirusScannerDef> {
            const localVarPath = this.basePath + '/api/v1/VirusScannerDefs/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling virusScannerDefsGetVirusScannerDefinition');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public virusScannerDefsGetVirusScannerDefinitionList (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<Array<VirusScannerDef>> {
            const localVarPath = this.basePath + '/api/v1/VirusScannerDefs';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param operations 
         */
        public virusScannerDefsPatchVirusScannerDefinition (params: {  entityId: string; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<VirusScannerDef> {
            const localVarPath = this.basePath + '/api/v1/VirusScannerDefs/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling virusScannerDefsPatchVirusScannerDefinition');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling virusScannerDefsPatchVirusScannerDefinition');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param value 
         */
        public virusScannerDefsPostVirusScannerDefinition (params: {  value: VirusScannerDef; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<VirusScannerDef> {
            const localVarPath = this.basePath + '/api/v1/VirusScannerDefs';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling virusScannerDefsPostVirusScannerDefinition');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param entityId 
         * @param value 
         */
        public virusScannerDefsPutVirusScannerDefinition (params: {  entityId: string; value: VirusScannerDef; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<VirusScannerDef> {
            const localVarPath = this.basePath + '/api/v1/VirusScannerDefs/{entityId}'
                .replace('{' + 'entityId' + '}', String(params.entityId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'entityId' is set
            if (params.entityId == null) {
                throw new Error('Missing required parameter entityId when calling virusScannerDefsPutVirusScannerDefinition');
            }
            // verify required parameter 'value' is set
            if (params.value == null) {
                throw new Error('Missing required parameter value when calling virusScannerDefsPutVirusScannerDefinition');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.value),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
//export namespace  {
    'use strict';

    export class WebExtensionsApi {
        protected basePath = 'http://localhost:62191';
        public defaultHeaders : any = {};

        constructor(basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        /**
         * 
         * 
         * @param webExtensionId 
         */
        public webExtensionsDeleteWebExtension (params: {  webExtensionId: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/WebExtensions/{webExtensionId}'
                .replace('{' + 'webExtensionId' + '}', String(params.webExtensionId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'webExtensionId' is set
            if (params.webExtensionId == null) {
                throw new Error('Missing required parameter webExtensionId when calling webExtensionsDeleteWebExtension');
            }
            let fetchParams = {
                method: 'DELETE',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param webExtensionId 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public webExtensionsGetWebExtension (params: {  webExtensionId: number; optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<WebExtension> {
            const localVarPath = this.basePath + '/api/v1/WebExtensions/{webExtensionId}'
                .replace('{' + 'webExtensionId' + '}', String(params.webExtensionId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            // verify required parameter 'webExtensionId' is set
            if (params.webExtensionId == null) {
                throw new Error('Missing required parameter webExtensionId when calling webExtensionsGetWebExtension');
            }
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param optionsOrderByName 
         * @param optionsOrderByType 
         * @param optionsPage 
         * @param optionsPageSize 
         * @param optionsCondition 
         * @param optionsExpands 
         * @param optionsIncludedFields 
         * @param optionsExcludedFields 
         * @param optionsIds 
         * @param optionsTimeout 
         */
        public webExtensionsGetWebExtensions (params: {  optionsOrderByName?: string; optionsOrderByType?: string; optionsPage?: number; optionsPageSize?: number; optionsCondition?: string; optionsExpands?: { [key: string]: string; }; optionsIncludedFields?: Array<string>; optionsExcludedFields?: Array<string>; optionsIds?: Array<string>; optionsTimeout?: number; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<any> {
            const localVarPath = this.basePath + '/api/v1/WebExtensions';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            if (params.optionsOrderByName !== undefined) {
                queryParameters['options.orderBy.name'] = params.optionsOrderByName;
            }

            if (params.optionsOrderByType !== undefined) {
                queryParameters['options.orderBy.type'] = params.optionsOrderByType;
            }

            if (params.optionsPage !== undefined) {
                queryParameters['options.page'] = params.optionsPage;
            }

            if (params.optionsPageSize !== undefined) {
                queryParameters['options.pageSize'] = params.optionsPageSize;
            }

            if (params.optionsCondition !== undefined) {
                queryParameters['options.condition'] = params.optionsCondition;
            }

            if (params.optionsExpands !== undefined) {
                queryParameters['options.expands'] = params.optionsExpands;
            }

            if (params.optionsIncludedFields !== undefined) {
                queryParameters['options.includedFields'] = params.optionsIncludedFields;
            }

            if (params.optionsExcludedFields !== undefined) {
                queryParameters['options.excludedFields'] = params.optionsExcludedFields;
            }

            if (params.optionsIds !== undefined) {
                queryParameters['options.ids'] = params.optionsIds;
            }

            if (params.optionsTimeout !== undefined) {
                queryParameters['options.timeout'] = params.optionsTimeout;
            }

            let fetchParams = {
                method: 'GET',
                headers: headerParams,
                                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param webExtensionId 
         * @param operations 
         */
        public webExtensionsPatchWebExtension (params: {  webExtensionId: number; operations: Array<PatchOperation>; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<{}> {
            const localVarPath = this.basePath + '/api/v1/WebExtensions/{webExtensionId}'
                .replace('{' + 'webExtensionId' + '}', String(params.webExtensionId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'webExtensionId' is set
            if (params.webExtensionId == null) {
                throw new Error('Missing required parameter webExtensionId when calling webExtensionsPatchWebExtension');
            }
            // verify required parameter 'operations' is set
            if (params.operations == null) {
                throw new Error('Missing required parameter operations when calling webExtensionsPatchWebExtension');
            }
            let fetchParams = {
                method: 'PATCH',
                headers: headerParams,
                body: JSON.stringify(params.operations),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param webExtension 
         */
        public webExtensionsPostWebExtension (params: {  webExtension: WebExtension; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<WebExtension> {
            const localVarPath = this.basePath + '/api/v1/WebExtensions';

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'webExtension' is set
            if (params.webExtension == null) {
                throw new Error('Missing required parameter webExtension when calling webExtensionsPostWebExtension');
            }
            let fetchParams = {
                method: 'POST',
                headers: headerParams,
                body: JSON.stringify(params.webExtension),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
        /**
         * 
         * 
         * @param webExtensionId 
         * @param webExtension 
         */
        public webExtensionsPutWebExtension (params: {  webExtensionId: number; webExtension: WebExtension; }, extraQueryParams?: any, extraFetchParams?: any ) : Promise<WebExtension> {
            const localVarPath = this.basePath + '/api/v1/WebExtensions/{webExtensionId}'
                .replace('{' + 'webExtensionId' + '}', String(params.webExtensionId));

            let queryParameters: any = assign({}, extraQueryParams);
            let headerParams: any = assign({}, this.defaultHeaders);
            headerParams['Content-Type'] = 'application/json';

            // verify required parameter 'webExtensionId' is set
            if (params.webExtensionId == null) {
                throw new Error('Missing required parameter webExtensionId when calling webExtensionsPutWebExtension');
            }
            // verify required parameter 'webExtension' is set
            if (params.webExtension == null) {
                throw new Error('Missing required parameter webExtension when calling webExtensionsPutWebExtension');
            }
            let fetchParams = {
                method: 'PUT',
                headers: headerParams,
                body: JSON.stringify(params.webExtension),
                
            };

            if (extraFetchParams) {
                fetchParams = assign(fetchParams, extraFetchParams);
            }

            let localVarPathWithQueryParameters = localVarPath + (localVarPath.indexOf('?') !== -1 ? '&' : '?') + querystring.stringify(queryParameters);

            return fetch(localVarPathWithQueryParameters, fetchParams).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    (error as any).response = response;
                    throw error;
                }
            });
        }
    }
//}
