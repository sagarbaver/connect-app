/**
 * Work In Progress section for dashboard page
 */
import React from 'react'
import PT from 'prop-types'

import { Link } from 'react-router-dom'
import Section from '../Section'
import SectionTitle from '../SectionTitle'
import ProjectStage from '../ProjectStage'

import './WorkInProgress.scss'

const WorkInProgress = ({ activePhases, phasesStates, ...props }) => (
  <Section>
    <SectionTitle title="Work in progress">
      <Link to={`/projects/${props.project.id}/plan`} styleName="view-all">View all</Link>
    </SectionTitle>
    {activePhases.map((activePhase) => (
      <ProjectStage
        {...props}
        phaseState={phasesStates[activePhase.id]}
        key={activePhase.id}
        phase={activePhase}
      />
    ))}
  </Section>
)

WorkInProgress.propTypes = {
  project: PT.object.isRequired,
  currentMemberRole: PT.string,
  isProcessing: PT.bool.isRequired,
  isSuperUser: PT.bool.isRequired,
  isManageUser: PT.bool.isRequired,
  updateProduct: PT.func.isRequired,
  fireProductDirty: PT.func.isRequired,
  fireProductDirtyUndo: PT.func.isRequired,
  addProductAttachment: PT.func.isRequired,
  updateProductAttachment: PT.func.isRequired,
  removeProductAttachment: PT.func.isRequired,
}

export default WorkInProgress
