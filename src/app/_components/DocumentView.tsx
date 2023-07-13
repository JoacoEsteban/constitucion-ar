import { Article, Constitution, ListArticle, Part, PartOrSection, Section, SectionWithSubsections, Subsection } from '@/types/constitution'
import React, { ReactNode } from 'react'

export function DocumentView ({ doc }: { doc: Constitution }) {
  return (
    <div className='container'>
      <h1>{doc.title}</h1>
      {doc.subtitle && <h2>{doc.subtitle}</h2>}
      <br />
      {doc.parts.map(Part)}
      {doc.finalNote && <LineSplitter line={doc.finalNote!} brs={2} />}
    </div>
  )
}

const hasSections = (part: PartOrSection): part is Part => {
  return (part as Part).sections !== undefined
}

const hasSubSections = (part: PartOrSection): part is Section & SectionWithSubsections => {
  return (part as SectionWithSubsections).subsections !== undefined
}

const haArticles = (part: PartOrSection): part is Subsection => {
  return (part as Subsection).articles !== undefined
}

const Part = (part: PartOrSection, index: number | string) => {
  if (hasSections(part)) {
    return (
      <div key={index + '-sec'}>
        <h2>{part.title}</h2>
        {part.sections.map((part, i) => Part(part, `${index}-${i}`))}
      </div>
    )
  }

  if (hasSubSections(part)) {
    return (
      <div key={index + '-sub'}>
        <h3>{part.title}</h3>
        {part.subsections.map((subSection, i) => Part(subSection as Subsection, `${index}-${i}`))}
      </div>
    )
  }

  if (haArticles(part)) {
    return (
      <div key={index + '-art'}>
        <h3>{part.title}</h3>
        {part.articles.map(Article)}
      </div>
    )
  }
}


const articleHasList = (article: Article): article is ListArticle => {
  return (article as ListArticle).list !== undefined
}

const Article = (article: Article, index: number) => {
  return (
    <div key={index}>
      {article.title && <h4>{article.title}</h4>}
      {article.number && <h4>Artículo {article.number}</h4>}
      {article.text && <LineSplitter line={article.text} brs={2} />}
      {articleHasList(article) && <ol>
        {article.list.map((item, index) =>
          <li>
            {/* <b>{index + 1}.</b> */}
            <LineSplitter line={item} brs={1} />
          </li>
        )}
      </ol>
      }
    </div>
  )
}


const LineSplitter = ({ line, brs }: { line: string, brs?: number }) => {
  return line.split('\n').map((line, index) => {
    return (
      <React.Fragment key={index}>
        {line}
        {Array(brs).fill(<br />)}
      </React.Fragment>
    )
  })
}