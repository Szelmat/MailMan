package http_handling

import "time"

type ResponseSizes struct {
  Sum float64
  Header float64
  Body float64
}

type Status struct {
  Code int
  Message string
}

type Response struct {
  Status Status
  Headers map[string]string
	Body string
	Err  error
	Time time.Duration
  Size ResponseSizes
}
