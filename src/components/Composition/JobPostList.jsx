import React from 'react'
import JobPostListItem from '../ui/JobPostListItem'

export default function JobPostList() {
  return (
    <div style={{
        display : "flex",
        flexWrap: "nowrap",
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
