import * as microsoftTeams from "@microsoft/teams-js";

export function getSSOToken(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    microsoftTeams.initialize(() => {
      microsoftTeams.authentication.getAuthToken({
        successCallback: (token: string) => {
          resolve(token);
        },
        failureCallback: (err: string) => {
          reject(new Error(err));
        },
        resources: []
      });
    });
  })
}