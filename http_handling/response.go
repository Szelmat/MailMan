package http_handling

import "time"

type ResponseSizes struct {
  Sum float64
  Header float64
  Body float64
}

type Response struct {
	Code int
  Status string
	Body string
	Err  error
	Time time.Duration
  Size ResponseSizes
}
