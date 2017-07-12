import { Command } from '../registery';

/**
 * Projects command.
 *
 * Shows the current time.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Projects implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'projects';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Display the projects I made.';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\
      These are some of the projects I have worked on or am working on:

      Remx:
      An easy way to extract, share and manage clips from the livestreaming platform Mixer.
      - The stack:
      | NodeJS
      | TypeScript
      | HapiJS
      | Webpack
      | VueJS
      | GoLang
      | FfMpeg
      | RethinkDB
      | RabbitMQ
      - Time worked on: July 2017 - now.

      Tumult ledensysteem:
      This is a system for a local club to track members and incidents.
      It uses RFID tags to easily identify members.
      - The stack:
      | NodeJS
      | TypeScript
      | Electron
      | RethinkDB
      - Time worked on: May 2017 - now.

      BeepBot:
      This is a project under the ExoZone team.
      It's a advanced bot for livestreamers to manage there chat easier.
      BeepBot currently has support for Mixer, Twitch and SmashCast.
      - The stack:
      | NodeJS
      | TypeScript
      | HapiJS
      | RethinkDB
      | RabbitMQ
      | Redis
      - Time worked on: August 2016 - now.
      - See it live: https://beepbot.net

      Leraar volgsysteem:
      This was my final project for my first year at the University of Applied Sciences of Utrecht.
      It is a tool for supervisors of a Elemetary School in Amsterdam to grade the performance of teachers.
      - The stack:
      | Java
      | PostgreSQL
      | Jersey
      | Tomcat
      | VueJS + VueX
      | TypeScript
      | WebPack
      - Time worked on: May 2017 - june 2017.
      - Source: https://github.com/AtlasDev/TICT-V1IPASS-15

      MailJS:
      MailJS is a mailing frontend with a build in MTA.
      I have learned a ton from this project, and it got me to where I am now.
      There would be a lot I would change if I would to start over today, but I'm still proud of it.
      - The stack:
      | AngularJS
      | NodeJS
      | Express
      | WebSocket
      | MongoDB
      | Redis
      - Time worked on: November 2015 - july 2016.
      - Source: https://github.com/AtlasDev/MailJS

      AtlasDev:
      This site you are looking at right now!
      - The stack:
      | TypeScript
      | Preact
      | Webpack
      - Time worked on: July 2016.
      - Source: https://github.com/AtlasDev/AtlasDev

      PartyParrotBot:
      A bot to use Party Parrots gifs inside a Telegram conversation.
      - The stack:
      | NodeJS
      | TypeScript
      - Time worked on: July 2017.
      - Source: https://github.com/AtlasDev/PartyParrotBot\
    `;
  }
}
