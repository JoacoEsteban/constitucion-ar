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

const Part = (part: PartOrSection, index: number) => {
  if (hasSections(part)) {
    return (
      <div key={index}>
        <h3>{part.title}</h3>
        {part.sections.map(Part)}
      </div>
    )
  }

  if (hasSubSections(part)) {
    return (
      <div key={index}>
        <h4>{part.title}</h4>
        {part.subsections.map(subSection => Part(subSection as Subsection, index))}
      </div>
    )
  }

  if (haArticles(part)) {
    return (
      <div key={index}>
        <h5>{part.title}</h5>
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
      {article.title && <h6>{article.title}</h6>}
      {article.number && <h6>Artículo {article.number}</h6>}
      {article.text && <LineSplitter line={article.text} brs={2} />}
      {articleHasList(article) &&
        article.list.map((item, index) =>
          <p>
            <b>{index + 1}.</b>
            <LineSplitter key={index} line={item} brs={1} />
          </p>
        )}
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