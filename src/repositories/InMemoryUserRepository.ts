import IUserRepository from './IUserRepository'
import User from '../entities/User'

export default class InMemoryUserRepository implements IUserRepository {
  private users: Map<string, User> = new Map()
 

  async findByEmail(email: string): Promise<User | null> {
    return this.users.get(email) || null
  }

  async save(user: User): Promise<void> {
    
    this.users.set(user.email, user)
  }
}