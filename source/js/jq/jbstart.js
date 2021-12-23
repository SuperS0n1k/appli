 $('#jbstart').click(function () {
            $.showIndicator();

            setTimeout(function () {
                $.hideIndicator();
            }, 2000)
        });
