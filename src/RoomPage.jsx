import React, { useState, useEffect, useRef } from "react"
import { useQuery } from '@tanstack/react-query'

export default function RoomPage(props) {

    const reqBody = {
        userId: props.userid,
        userName: props.username,
        room: props.room,
        role: props.role,
    }
    const { isLoading, error, data } = useQuery({
        queryKey: ['myState'],
        queryFn: () =>
            fetch('/api/tick', { method: "POST", body: JSON.stringify(reqBody) }).then(res =>
                res.json()
            )
    })

    // if (error) return error

    return (
        <div className="container-sm">
            {/* <p>{data.toString()}</p> */}
            <p>{reqBody.toString()}</p>
            {/* <div className="input-group input-group-lg my-2">
                <span className="input-group-text">Оценка</span>
                <input
                    type="number"
                    className="form-control"
                // onChange={markChange}
                // onKeyUp={markKeyUp}
                // value={markClient || ""}
                ></input>
                <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                // onClick={markSelect}
                >
                    . . .
                </button>
            </div> */}
        </div>
    )
}