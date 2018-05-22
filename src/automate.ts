'use strict';

import {
    APITokenApi,
    AVTemplatePoliciesApi,
    AVTemplatePolicyDataApi,
    ChassisApi,
    ClientsApi,
    CommandExecuteApi,
    CommandHistoryApi,
    CommandsApi,
    ComputerAlertsApi,
    ComputerMenusApi,
    ComputerMonitorsApi,
    ComputerRunningScriptsApi,
    ComputersApi,
    ComputerScriptHistoryApi,
    ContactsApi,
    DatabaseServerTimeApi,
    DataViewFoldersApi,
    DataViewsApi,
    GroupsApi,
    LinksApi,
    LocationsApi,
    NetworkDevicesApi,
    PatchInformationApi,
    PatchingStatsApi,
    RemoteAgentSchedulesApi,
    RemoteAgentTemplatesApi,
    RetiredAssetsApi,
    ScheduledScriptApi,
    ScriptFoldersApi,
    ScriptsApi,
    SearchesApi,
    SearchFoldersApi,
    SensorChecksApi,
    StatisticsApi,
    SystemContactsApi,
    TemplateAvailablePropertiesApi,
    TemplatePropertiesApi,
    TicketsApi,
    UserAuditsApi,
    UserAvatarsApi,
    UserClassesApi,
    UserFavoritesApi,
    UserFoldersApi,
    UsersApi,
    UserSettingsApi,
    VirusScannerDefsApi,
    WebExtensionsApi,
    TokenResult
} from './api/cwa';

export class APIClient {
    public APITokenApi: APITokenApi;
    public AVTemplatePoliciesApi: AVTemplatePoliciesApi;
    public AVTemplatePolicyDataApi: AVTemplatePolicyDataApi;
    public ChassisApi: ChassisApi;
    public ClientsApi: ClientsApi;
    public CommandExecuteApi: CommandExecuteApi;
    public CommandHistoryApi: CommandHistoryApi;
    public CommandsApi: CommandsApi;
    public ComputerAlertsApi: ComputerAlertsApi;
    public ComputerMenusApi: ComputerMenusApi;
    public ComputerMonitorsApi: ComputerMonitorsApi;
    public ComputerRunningScriptsApi: ComputerRunningScriptsApi;
    public ComputersApi: ComputersApi
    public ComputerScriptHistoryApi: ComputerScriptHistoryApi;
    public ContactsApi: ContactsApi;
    public DatabaseServerTimeApi: DatabaseServerTimeApi;
    public DataViewFoldersApi: DataViewFoldersApi;
    public DataViewsApi: DataViewsApi;
    public GroupsApi: GroupsApi;
    public LinksApi: LinksApi;
    public LocationsApi: LocationsApi;
    public NetworkDevicesApi: NetworkDevicesApi;
    public PatchInformationApi: PatchInformationApi;
    public PatchingStatsApi: PatchingStatsApi;
    public RemoteAgentSchedulesApi: RemoteAgentSchedulesApi;
    public RemoteAgentTemplatesApi: RemoteAgentTemplatesApi;
    public RetiredAssetsApi: RetiredAssetsApi;
    public ScheduledScriptApi: ScheduledScriptApi;
    public ScriptFoldersApi: ScriptFoldersApi;
    public ScriptsApi: ScriptsApi;
    public SearchesApi: SearchesApi;
    public SearchFoldersApi: SearchFoldersApi;
    public SensorChecksApi: SensorChecksApi;
    public StatisticsApi: StatisticsApi;
    public SystemContactsApi: SystemContactsApi;
    public TemplateAvailablePropertiesApi: TemplateAvailablePropertiesApi;
    public TemplatePropertiesApi: TemplatePropertiesApi;
    public TicketsApi: TicketsApi;
    public UserAuditsApi: UserAuditsApi;
    public UserAvatarsApi: UserAvatarsApi;
    public UserClassesApi: UserClassesApi;
    public UserFavoritesApi: UserFavoritesApi;
    public UserFoldersApi: UserFoldersApi;
    public UsersApi: UsersApi;
    public UserSettingsApi: UserSettingsApi;
    public VirusScannerDefsApi: VirusScannerDefsApi;
    public WebExtensionsApi: WebExtensionsApi;
    private readonly host: string;
    private readonly username: string;
    private readonly password: string;
    private token?: string;
    public constructor(basePath: string, username: string, password: string) {
        this.host = basePath;
        this.username = username;
        this.password = password;
        this.APITokenApi = new APITokenApi(this.host);
        this.AVTemplatePoliciesApi = new AVTemplatePoliciesApi(this.host);
        this.AVTemplatePolicyDataApi = new AVTemplatePolicyDataApi(this.host);
        this.ChassisApi = new ChassisApi(this.host);
        this.ClientsApi = new ClientsApi(this.host);
        this.CommandExecuteApi = new CommandExecuteApi(this.host);
        this.CommandHistoryApi = new CommandHistoryApi(this.host);
        this.CommandsApi = new CommandsApi(this.host);
        this.ComputerAlertsApi = new ComputerAlertsApi(this.host);
        this.ComputerMenusApi = new ComputerMenusApi(this.host);
        this.ComputerMonitorsApi = new ComputerMonitorsApi(this.host);
        this.ComputerRunningScriptsApi = new ComputerRunningScriptsApi(this.host);
        this.ComputersApi = new ComputersApi(this.host);
        this.ComputerScriptHistoryApi = new ComputerScriptHistoryApi(this.host);
        this.ContactsApi = new ContactsApi(this.host);
        this.DatabaseServerTimeApi = new DatabaseServerTimeApi(this.host);
        this.DataViewFoldersApi = new DataViewFoldersApi(this.host);
        this.DataViewsApi = new DataViewsApi(this.host);
        this.GroupsApi = new GroupsApi(this.host);
        this.LinksApi = new LinksApi(this.host);
        this.LocationsApi = new LocationsApi(this.host);
        this.NetworkDevicesApi = new NetworkDevicesApi(this.host);
        this.PatchInformationApi = new PatchInformationApi(this.host);
        this.PatchingStatsApi = new PatchingStatsApi(this.host);
        this.RemoteAgentSchedulesApi = new RemoteAgentSchedulesApi(this.host);
        this.RemoteAgentTemplatesApi = new RemoteAgentTemplatesApi(this.host);
        this.RetiredAssetsApi = new RetiredAssetsApi(this.host);
        this.ScheduledScriptApi = new ScheduledScriptApi(this.host);
        this.ScriptFoldersApi = new ScriptFoldersApi(this.host);
        this.ScriptsApi = new ScriptsApi(this.host);
        this.SearchesApi = new SearchesApi(this.host);
        this.SearchFoldersApi = new SearchFoldersApi(this.host);
        this.SensorChecksApi = new SensorChecksApi(this.host);
        this.StatisticsApi = new StatisticsApi(this.host);
        this.SystemContactsApi = new SystemContactsApi(this.host);
        this.TemplateAvailablePropertiesApi = new TemplateAvailablePropertiesApi(this.host);
        this.TemplatePropertiesApi = new TemplatePropertiesApi(this.host);
        this.TicketsApi = new TicketsApi(this.host);
        this.UserAuditsApi = new UserAuditsApi(this.host);
        this.UserAvatarsApi = new UserAvatarsApi(this.host);
        this.UserClassesApi = new UserClassesApi(this.host);
        this.UserFavoritesApi = new UserFavoritesApi(this.host);
        this.UserFoldersApi = new UserFoldersApi(this.host);
        this.UsersApi = new UsersApi(this.host);
        this.UserSettingsApi = new UserSettingsApi(this.host);
        this.VirusScannerDefsApi = new VirusScannerDefsApi(this.host);
        this.WebExtensionsApi = new WebExtensionsApi(this.host);
    };
    public async authenticate(): Promise<APIClient> {
        try {
            const auth: TokenResult = await this.APITokenApi.aPITokenPost({ credentials: { UserName: this.username, Password: this.password }});
            if (auth.AccessToken && auth.AccessToken.length > 0) {
                this.token = auth.AccessToken;
                await this.refreshAuthToken();
                return Promise.resolve(this);
            } else {
                throw new ReferenceError('Response does not include an access token');
            }
        } catch (error) {
            return Promise.reject<APIClient>(error);
        }
    };
    public async refreshAuthToken(): Promise<void> {
        try {
            if (this.token) {
                const auth: TokenResult = await this.APITokenApi.aPITokenPost_1({ tokenText: this.token });
                Object.getOwnPropertyNames(this).filter( (property: string): boolean => property.toLowerCase().includes('api')).forEach( (property: string): void => {
                    // @ts-ignore
                    Reflect.defineProperty(this[property], 'defaultHeaders', {
                        value: { 'Authorization': `Bearer ${auth.AccessToken}` }
                    });
                });
                return Promise.resolve();
            } else {
                throw new Error('Failed to refresh authentication token');
            }
        } catch (error) {
            return Promise.reject(error);
        }
    };
};
export * from './api/cwa';
export default APIClient;