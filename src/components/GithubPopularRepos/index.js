import {Component} from 'react'
import './index.css'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {language: 'ALL', isactive: false}

  componentDidMount() {
    this.onFilterRepos()
  }

  onFilterRepos = async () => {
    const {language} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${language}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = response.json()
    console.log(data)
  }

  changeLanguage = id => {
    this.setState({language: id, isactive: true}, this.onFilterRepos)
  }

  render() {
    const {language, isactive} = this.state
    console.log(language)
    return (
      <div className="main-cont">
        <h1 className="popular">Popular</h1>
        <ul className="buttons-cont">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              eachLanguage={eachLanguage}
              key={eachLanguage.id}
              isactive={isactive}
              changeRepo={this.changeLanguage}
            />
          ))}
        </ul>
        <RepositoryItem filteredLanguage={language} />
      </div>
    )
  }
}
export default GithubPopularRepos
