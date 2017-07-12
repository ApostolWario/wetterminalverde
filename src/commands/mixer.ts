import { Command } from '../registery';

/**
 * Mixer command.
 *
 * Displays my own mixer profile when no argument given.
 * It does a search to the argument if it is given.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Mixer implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'mixer';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Show my mixer stats. Use `Mixer {username}` to show stats of someone else.';

  /**
   * Url of my own mixer profile.
   */
  private ownProfile: string = 'https://mixer.com/api/v1/users/1074';
  /**
   * Base search string to use to find a user.
   *
   * The query is appended at the end.
   */
  private searchString: string = 'https://mixer.com/api/v1/users/search?limit=1&query=';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    if (args[0]) {
      // Search a user.
      const searchRes = await fetch(
        this.searchString + encodeURIComponent(args[0]),
      );
      const searchData = await searchRes.json();
      // Format only if a user has been found.
      if (searchData[0]) {
        return this.formatProfile(searchData[0]);
      }
    }
    // Get my own profile if no argument was given or no user was found.
    const res = await fetch(this.ownProfile);

    return this.formatProfile(await res.json());
  }

  /**
   * Format the received user to a single string to print.
   *
   * @param data Raw response from Mixer.
   * @return The output.
   */
  private formatProfile(data: any): string {
    return `\
      Mixer profile of ${data.username}:

      Id: ${data.id}.
      Bio: ${data.bio}
      Level: ${data.level} (${data.experience} xp).
      Sparks: ${data.sparks}.
      Partnered: ${data.channel.partnered ? 'Yes' : 'No'}.
      Channel title: ${data.channel.name}.
      Channel live: ${data.channel.online ? 'Yes' : 'No'}.
      Current viewers: ${data.channel.viewersCurrent}.
      Total views: ${data.channel.viewersTotal}.
      Total followers: ${data.channel.numFollowers}.
      Created At: ${new Date(data.createdAt).toDateString()}.
      Updated At: ${new Date(data.updatedAt).toDateString()}.`;
  }
}
