import CMS from 'netlify-cms'

import ProfilePagePreview from './preview-templates/ProfilePagePreview'
import NewsPostPreview from './preview-templates/NewsPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('profile', ProfilePagePreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
