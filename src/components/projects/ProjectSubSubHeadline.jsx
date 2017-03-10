import React, {Component} from 'react';

class ProjectSubSubHeadline extends Component {
  render() {
    return (
			<table className="project-subSubHeadline">
				<tr>
					<td className='headline'>{this.props.subSubHeadline}</td>
				</tr>
			</table>
    );
  }
}

export default ProjectSubSubHeadline;