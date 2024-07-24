@RestController
@RequestMapping("/api/cabs")
public class CabController {
    @Autowired
    private CabService cabService;

    @GetMapping
    public List<Cab> getAllCabs() {
        return cabService.getAllCabs();
    }

    @GetMapping("/{id}")
    public Cab getCabById(@PathVariable Long id) {
        return cabService.getCabById(id);
    }

    @PostMapping
    public Cab createCab(@RequestBody Cab cab) {
        return cabService.createCab(cab);
    }

    @PutMapping("/{id}")
    public Cab updateCab(@PathVariable Long id, @RequestBody Cab cabDetails) {
        return cabService.updateCab(id, cabDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteCab(@PathVariable Long id) {
        cabService.deleteCab(id);
    }
}
