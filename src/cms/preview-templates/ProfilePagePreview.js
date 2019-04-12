import React from 'react'
import PropTypes from 'prop-types'
import { ProfilePageTemplate } from '../../templates/profile-page'

const ProfilePagePreview = ({ entry, widgetFor }) => (
  <ProfilePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ProfilePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProfilePagePreview
