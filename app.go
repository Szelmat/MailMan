package main

import (
	"changeme/http_handling"
	"changeme/util"
	"context"
	"fmt"
	"io"
	"net/http"
	"time"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) Query(url string) http_handling.Response {
  startTime := time.Now()
	resp, err := http.Get(url)
  endTime := time.Now()

	if err != nil {
		return http_handling.Response{
      Status: http_handling.Status{
        Code: resp.StatusCode,
        Message: resp.Status,
      },
			Body: "",
			Err:  err,
			Time: time.Millisecond,
		}
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
  header := fmt.Sprintf("%v", resp.Header)

  bodySizeKb := http_handling.CalcSizeKb(string(body))
  headerSizeKb := http_handling.CalcSizeKb(string(header))  

	return http_handling.Response{
    Status: http_handling.Status{
      Code: resp.StatusCode,
      Message: resp.Status,
    },
		Body: string(body),
		Err:  err,
		Time: time.Duration(endTime.Sub(startTime).Milliseconds()),
    Size: http_handling.ResponseSizes{
      Sum: util.FormatTwoDecimalPlaces(headerSizeKb + bodySizeKb),
      Header: util.FormatTwoDecimalPlaces(headerSizeKb),
      Body: util.FormatTwoDecimalPlaces(bodySizeKb),
    },
	}
}
