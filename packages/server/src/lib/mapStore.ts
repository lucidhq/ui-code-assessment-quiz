import { readFile, writeFile } from 'fs/promises'
import path from 'path'

export interface IAnswer {
  id: string
  type: string
  correct: boolean
  answer: string
  date: number
}

const DATA_DIR = 'src/db'
const FILENAME = 'answers.json'

export class MapStore {
  private filepath: string = FILENAME

  constructor(filename: string = FILENAME) {
    this.filepath = path.resolve(DATA_DIR, filename)
  }

  public async createFile() {
    try {
      await writeFile(this.filepath, '')
    } catch (error) {
      console.error(error)
    }
  }

  public async save(data: Map<string, IAnswer>) {
    const serializedData = JSON.stringify(Array.from(data.entries()))

    try {
      await writeFile(this.filepath, serializedData)
    } catch (error) {
      console.error(error)
    }
  }

  public async read(): Promise<Map<string, IAnswer>> {
    const data = await readFile(this.filepath, 'utf8')
    const parsed = JSON.parse(data)

    return new Map(parsed)
  }

  public async reset() {
    try {
      await writeFile(this.filepath, '')
    } catch (error) {
      console.error(error)
    }
  }
}
