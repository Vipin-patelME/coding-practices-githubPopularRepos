// Write your code here
import {Component} from 'react'

import './index.css'

class RepositoryItem extends Component {
  render() {
    const {filteredLanguage} = this.props
    return <h1>{filteredLanguage}</h1>
  }
}
export default RepositoryItem
