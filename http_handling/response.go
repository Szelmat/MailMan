package http_handling

import "time"

type Response struct {
	Code int
	Body string
	Err  error
	Time time.Duration
}
