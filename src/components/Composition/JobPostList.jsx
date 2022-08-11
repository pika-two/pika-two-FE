import React from 'react'
import JobPostListItem from '../ui/JobPostListItem'

export default function JobPostList() {
  return (
    <div style={{
        display : "grid",
        gridTemplateColumns: "150px 150px",
        justifyContent: "space-evenly",
        overflowX: "auto"
    }}>
        <JobPostListItem/>
        <JobPostListItem/>
        <JobPostListItem/>
        <JobPostListItem/>
        <JobPostListItem/>
        <JobPostListItem/>
        <JobPostListItem/>
        <JobPostListItem/>
        <JobPostListItem/>
        <JobPostListItem/>
    </div>
  )
}
