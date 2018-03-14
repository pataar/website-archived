(function ($) {

	skel.init({
		reset:       'full',
		breakpoints: {
			global: {containers: '45em', grid: {gutters: ['2em', 0]}},
			custom: { containers: '45em', grid: {gutters: ['2em', 0]}},
			xlarge: {media: '(max-width: 1680px)'},
			large:  {
				media:      '(max-width: 1280px)',
				containers: '42em',
				grid:       {gutters: ['1.5em', 0]},
				viewport:   {scalable: false}
			},
			medium: {media: '(max-width: 1024px)', containers: '85%!'},
			small:  {
				media:      '(max-width: 736px)',
				containers: '90%!',
				grid:       {gutters: ['1.25em', 0]}
			},
			xsmall: {media: '(max-width: 480px)'}
		},
		plugins:     {
			layers: {
				config:    {
					mode: 'transform'
				},
				titleBar:  {
					breakpoints: 'medium',
					width:       '100%',
					height:      44,
					position:    'top-left',
					side:        'top',
					html:        '<span class="toggle fas fa-bars" data-action="toggleLayer" data-args="sidePanel"></span><span class="title" data-action="copyText" data-args="logo"></span>'
				},
				sidePanel: {
					breakpoints: 'medium',
					hidden:      true,
					width:       {small: 275, medium: '20em'},
					height:      '100%',
					animation:   'pushX',
					position:    'top-right',
					side:        'right',
					orientation: 'vertical',
					clickToHide: true,
					html:        '<div data-action="moveElement" data-args="header"></div>'
				}
			}
		}
	});


})(jQuery);