import { Link } from 'react-router-dom'
import { AvatarCardIssueContainer, CardIssueContainer } from './style'

import github from '../../assets/Issue/github-issue.svg'
import schedule from '../../assets/Issue/schedule.svg'
import comment from '../../assets/Issue/comment.svg'

export const CardIssue = () => {
  return (
    <CardIssueContainer>
      <article>
        <Link className="link-home" to="/">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_7_12)">
              <path
                d="M8.24987 12.125C8.04426 12.125 7.83855 12.0465 7.68185 11.8896L2.86042 7.06815C2.54653 6.75425 2.54653 6.24574 2.86042 5.93185L7.68185 1.11042C7.99574 0.796526 8.50425 0.796526 8.81815 1.11042C9.13204 1.42432 9.13204 1.93283 8.81815 2.24672L4.56475 6.5L8.81865 10.7539C9.13255 11.0678 9.13255 11.5763 8.81865 11.8902C8.6617 12.0472 8.45579 12.125 8.24987 12.125Z"
                fill="#3294F8"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_12">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          Voltar
        </Link>
        <p className="text-view-github">
          ver no github{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
          >
            <g clip-path="url(#clip0_7_26)">
              <path
                d="M6.80357 1.67857C6.80357 1.23485 7.16267 0.875 7.60714 0.875H10.7988C10.9294 0.875 11.0349 0.896596 11.1278 0.936021C11.2006 0.974944 11.3111 1.03245 11.389 1.10854C11.389 1.10979 11.389 1.11105 11.3915 1.11205C11.5472 1.26825 11.6024 1.47215 11.625 1.67606C11.625 1.67706 11.625 1.67782 11.625 1.67857V4.89286C11.625 5.33733 11.2659 5.69643 10.8214 5.69643C10.377 5.69643 10.0179 5.33733 10.0179 4.89286V3.6197L5.76395 7.87109C5.45006 8.18499 4.9428 8.18499 4.62891 7.87109C4.31501 7.5572 4.31501 7.04994 4.62891 6.73605L8.8803 2.48214H7.60714C7.16267 2.48214 6.80357 2.12229 6.80357 1.67857ZM0.375 3.28571C0.375 2.39802 1.09445 1.67857 1.98214 1.67857H4.39286C4.83733 1.67857 5.19643 2.03842 5.19643 2.48214C5.19643 2.92662 4.83733 3.28571 4.39286 3.28571H1.98214V10.5179H9.21429V8.10714C9.21429 7.66267 9.57338 7.30357 10.0179 7.30357C10.4623 7.30357 10.8214 7.66267 10.8214 8.10714V10.5179C10.8214 11.4043 10.1007 12.125 9.21429 12.125H1.98214C1.09445 12.125 0.375 11.4043 0.375 10.5179V3.28571Z"
                fill="#3294F8"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_26">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </p>
        <h2>JavaScript data types and data structures</h2>
        <AvatarCardIssueContainer>
          <div className="container-avatar-img-icon">
            <img className="avatar-img-icon" src={github} alt="" />
            <p>cameronwll</p>
          </div>
          <div className="container-avatar-img-icon">
            <img className="avatar-img-icon" src={schedule} alt="" />
            <p>cameronwll</p>
          </div>
          <div className="container-avatar-img-icon">
            <img className="avatar-img-icon" src={comment} alt="" />
            <p>cameronwll</p>
          </div>
        </AvatarCardIssueContainer>
      </article>
    </CardIssueContainer>
  )
}
