import { Command } from '../registery';

/**
 * Ssh command.
 *
 * Displayes my SSH key, in a PGP signed container.
 *
 * Version history:
 * - 1.0 Initial Version
 *
 * @version 1.0
 * @since 0.1.0
 */
export class Ssh implements Command {
  /**
   * Trigger for the command.
   *
   * Must be unique.
   */
  public trigger: string = 'ssh';
  /**
   * Description of the command.
   *
   * This is displayed by the `help` command.
   */
  public description: string = 'Print my signed public SSH key.';

  /**
   * Function to run when this command is triggered.
   *
   * @param args A list of arguments given by the command.
   * @return The output of the command. Can be a promise.
   */
  public async run(args: string[]): Promise<string> {
    return `\
      View my PGP key with \`pgp\`.

      -----BEGIN PGP SIGNED MESSAGE-----
      Hash: SHA256

      ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIDmb6yTRYopd3V+G8aAgnb3BvNrB7Tu9Sd37J+hDUyqL dany@atlasdev.nl
      -----BEGIN PGP SIGNATURE-----

      iQIzBAEBCAAdFiEEu5T9KKu6a2aqsHuAX6RcMcLjtUMFAllkyfoACgkQX6RcMcLj
      tUOvaQ/+J7hBueE5pSNyAtHiSEg2cHnx9UCkNwBh3r3H+6shKMUQ+aikWB4Tpeyp
      Wl4r3l6Q/7M31MRAOiY3JnURFX3EDkkkanlxiXrLiS6/o4RkosYRQr6YsGG+5zAU
      USMKRmpf3Dshz6e4vwk0uPi6GiBujxoQYSeDZWed1zqRFXnVxj8UE6kW/DYLRioI
      GjCYeiXmGdaoGk2kcPlV6eU18yQ5jkfFhWiwTNdHYkzXlkVeVq7bQ8VSOQvWmvoU
      UqbqseNVkF2Yb0uAqea4ckVIePTxUwT6ATUm+6p7COUUYs/N0kzRO1hvh2hC0AyT
      Q2CRhtBLDhsBD05FRonmKCgOP7kzMIXH/ozuou2dAE8j6C3s0KYf0/SRms6vD3tF
      8Z76jq0gxU78yJ1DhUOf6dV/xW4wKCK6n4Ygrw0tPqP1NKhUvD2JIixiuqzq0GTa
      ddY4yz/n95CS+JMSI5N2vAhJ+GGAFq2I1kNsF3j3ZLGg7qJPdlBjV4cWxHA7qNp1
      1x7PRhy0Y/t8CJet9FCoPApLKDvfQreqEj+kJ2nUwkG76algeCbIaZmpbM5ZsjHh
      PFDZovIWV5abYGQP2CV27je04QZ7iX3MnqI4q/Lkcrf57tM0WDFKCKax7GrTR5XA
      ijkyXaBQPORjoixM5tIIaxlh497Z3TBDPDx2Mlp/mMmF2pwHKqY=
      =PkqG
      -----END PGP SIGNATURE-----\
    `;
  }
}
