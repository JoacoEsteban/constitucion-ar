type title = string | null

type heading = {
  title: title
  subtitle?: title
}


export interface TextArticle {
  text: string
}

export interface ListArticle {
  text?: string
  list: string[]
}

export type Article = (TextArticle | ListArticle) & {
  title?: string
  number?: number
}

export interface Subsection extends heading {
  articles: Article[]
}

export interface SectionWithSubsections {
  subsections: (SectionWithSubsections | Subsection)[]
}

export type Section = (Subsection | SectionWithSubsections) & heading

export interface Part extends heading {
  sections: Section[]
}

export interface Constitution extends heading {
  parts: (Part | Section)[],
  finalNote?: string
}
