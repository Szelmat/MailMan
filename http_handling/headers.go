package http_handling

import (
	"net/http"
	"strings"
)

func ConvertHeadersToSimpleMap(headers http.Header) map[string]string {
  simpleHeaders := make(map[string]string)
  for key, values := range headers {
    if len(values) > 0 {
      simpleHeaders[key] = strings.Join(values, ";")
    }
  }
  return simpleHeaders
}

