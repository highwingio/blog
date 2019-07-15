import React from 'react'
import { TextHeading, OL, UL } from './index'

const flatten = (text: any, child: any) =>
  typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)

export const HeadingRenderer = (props: any) => {
  const { headings, level, children } = props
  const Comp = headings[level - 1] || TextHeading
  const kids = React.Children.toArray(children)
  const text = kids.reduce(flatten, '')
  const slug = text.toLowerCase().replace(/\W/g, '-')
  return <Comp as={`h${level}`} id={slug} {...props} />
}

export const ListRenderer = (props: any) => {
  const { ordered, children } = props
  const Comp = ordered ? OL : UL
  const kids = React.Children.toArray(children)
  const text = kids.reduce(flatten, '')
  const slug = text.toLowerCase().replace(/\W/g, '-')
  return <Comp id={slug} {...props} />
}

