package http_handling

import "time"

type ResponseSizes struct {
  Sum float64
  HeaderSize float64
  BodySize float64
}

type Response struct {
	Code int
	Body string
	Err  error
	Time time.Duration
  Size ResponseSizes
}
