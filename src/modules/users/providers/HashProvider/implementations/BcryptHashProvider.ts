import { hash, compare } from 'bcryptjs';
import IHashProvider from '../models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, newHash: string): Promise<boolean> {
    return compare(payload, newHash);
  }
}

export default BCryptHashProvider;
