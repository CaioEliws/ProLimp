import styled from "styled-components";

export const SimulationFormContainer = styled.div`
    span {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 5rem;

        > h3 {
            font-size: 3.6rem;
            font-weight: 400;
        }

        > h4 {
            font-size: 2rem;
            font-weight: 400;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;

            color: white;

            margin-left: 5rem;
            padding: 1.2rem;
            gap: .5rem;

            width: 20rem;
            height: 5.6rem;
            border-radius: 12px;

            background: #21D266;
            border: none;

            cursor: pointer;

            transition: background 0.3s ease;

            &:hover {
                background: #1CA954;
            }
        }
    }
`;
