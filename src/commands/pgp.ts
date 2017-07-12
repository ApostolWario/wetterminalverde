import { Command } from '../registery';

/**
 * PGP command.
 *
 * Receives and displays my PGP key from the keybase.io server.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Pgp implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'pgp';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Pull my PGP key from keybase.io';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    const req = await fetch('https://keybase.io/atlasdev/pgp_keys.asc');

    return (await req.text()).trim();
  }
}
