import { Command } from '../registery';

/**
 * Education command.
 *
 * Show my current level of education.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Education implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'education';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Show my current level of education.';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\
      These are my certificates and degrees I currently own or work on.

      Deelcertificaat Wiskunde B (Part-certificate Mathematics)
      - State: To be started

      Bachelor Software & Information Engineering
      - State: In progress
      - Institution: Hogeschool Utrecht (University of Applied Sciences of Utrecht)
      - Location: Utrecht
      - Timespan: September 2016 - now.

      Hoger algemeen voortgezet onderwijs (Higher General Continued Education)
      - State: Finished
      - Institution: Pieter Nieuwland College
      - Location: Amsterdam
      - Timespan: September 2014 - July 2016.

      Voorbereiden Wetenschappelijk Onderwijs (Pre-University Secondary Education)
      - State: Stopped
      - Institution: Pieter Nieuwland College
      - Location: Amsterdam
      - Timespan: September 2011 - July 2014.\
    `;
  }
}
