import React from 'react'

import styles from './styles.module.css'

export const PageNotFound = ({content}) => <div className={ styles.wrapper }>
                                             <h1 className={ styles.header }>404</h1>
                                             <div className={ styles.content }>
                                               { content }
                                             </div>
                                           </div>
PageNotFound.propTypes = {
    content: React.PropTypes.string
};

PageNotFound.defaultProps = {
    content: 'Page Not Found'
};

export default PageNotFound
