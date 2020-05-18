import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Tab } from './Tab'

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label)

  const onClickTabItem = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div>
      <ol>
        {children.map((child) => {
          const { label } = child.props

          return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />
        })}
      </ol>
      <div>
        {children.map((child) => {
          const { label, children } = child.props
          if (label !== activeTab) return undefined
          return children
        })}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
}
