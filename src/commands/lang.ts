import { Command } from '../registery';

/**
 * Language command.
 *
 * Shows the languages I know.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Lang implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'lang';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Show the languages I know.';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\
      Human Languages:
      - Dutch: Native
      - English: Intermediate - Advanced
      - German: Intermediate
      - French: Elementary

      Programming Languages:
      - TypeScript: Advanced
      - JavaScript: Advanced
      - Java: Intermediate
      - Python: Intermediate
      - PHP: Elementary - Intermediate
      - GoLang: Elementary

      JavaScipt Frameworks:
      - VueJS: Intermediate
      - Preact: Intermediate
      - Angular 2+: Intermediate
      - AngularJS: Elementary\
    `;
  }
}
